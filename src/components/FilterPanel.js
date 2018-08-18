import React, { Component } from 'react'

class FilterPanel extends Component {

    state = {
        allFilters: [],
        selectedFilters: [],
    };

    updateSelected(category, description) {
        if (this.isSelected(category, description)) {
            const targetCategory = this.state.selectedFilters.filter(cat => cat.name === category)[0];
            const arrayAfterRemovedItem = targetCategory.values.filter(value => value !== description);
            for (const [index, element] of this.state.selectedFilters.entries()) {
                if (this.state.selectedFilters[index].name === category) this.state.selectedFilters[index].values = arrayAfterRemovedItem;
            }
        }
        else {
            for (const [index, element] of this.state.selectedFilters.entries()) {
                if (this.state.selectedFilters[index].name === category) this.state.selectedFilters[index].values.push(description);
            }
        }
        this.forceUpdate();
        this.props.filterIsUpdated(this.state.selectedFilters);
    }

    isSelected(category, description) {
        const categoryInSelection = this.state.selectedFilters.filter(item => item.name === category)[0];
        return (categoryInSelection.values.includes(description));
    }

    componentDidMount() {
        this.setState({ allFilters: this.props.filters });
        this.setState({ selectedFilters: JSON.parse(JSON.stringify(this.props.filters.slice())) });
    }

    render() {
        return (
            <div className="filterpanel medium-blue">
                <br/>
                { this.state.allFilters.map((filter,index) =>
                    <div key={index}>
                        <br/>
                        <div className="filterpanel-header white-text">{ filter.name }</div>
                            { filter.values.map((value,index) =>
                                <div className="filterpanel-values brown-text" key={index}>
                                    <label>
                                        <input type="checkbox" name={value} checked={ this.isSelected(filter.name, value) } onChange={this.updateSelected.bind(this, filter.name, value)}/>
                                        { value }
                                    </label>
                                </div>
                            )}
                    </div>
                )}
            </div>
        )
    }
}

export default FilterPanel