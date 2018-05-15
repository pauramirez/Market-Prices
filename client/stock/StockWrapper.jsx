import React, { Component } from 'react';
import StockInfo from './StockInfo';


class StockWrapper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            marketState: "JPM",
            timeState: "TIME_SERIES_DAILY",
            isLoading: true,
            error: null,
            results: [],
        };

        this.fetchProfileStockInfo = this.fetchProfileStockInfo.bind(this);
    }

    updateEnterprise(event) {
        this.setState({ marketState: event.target.value });
    }


    fetchProfileStockInfo() {
        fetch("/api/stocks/portafolio", {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify({
                market: this.state.marketState,
                time: this.state.timeState,
            })
        })
            .then(res => res.json())
            .then(json => {
                if (json.success) {
                    this.setState({
                        isLoading: false,
                        results: json.results,
                    });
                }
                else {
                    this.setState({
                        isLoading: false,
                        error: json.message,
                    });
                }
            });
    }

    render() {

        const {
            error,
            isLoading,
            results,
        } = this.state;

        if (isLoading) {
            return (
                <div>
                    <select onChange={this.updateEnterprise.bind(this)}>
                        <option name="JPM" value="JPM" >JP MORGAN </option>
                        <option name="MSFT" value="MSFT" >MICROSOFT </option>
                        <option name="AAPL" value="AAPL" >APPLE </option>
                        <option name="GOOG" value="GOOG" >GOOGLE </option>
                        <option name="AMZN" value="AMZN" >AMAZON </option>
                        <option name="NKE" value="NKE" >NIKE </option>
                    </select>
                    <button onClick={this.fetchProfileStockInfo}>SUBMIT </button>
                </div>
            );
        }

        if (error) {
            return (
                <div style={{ backgroundColor: 'red' }}>
                    <p style={{ color: 'fff' }}>
                        {error}
                    </p>
                </div>
            );
        }


        return (
            <div>
                <select onChange={this.updateEnterprise.bind(this)}>
                    <option name="JPM" value="JPM" >JP MORGAN </option>
                    <option name="MSFT" value="MSFT" >MICROSOFT </option>
                    <option name="AAPL" value="AAPL" >APPLE </option>
                    <option name="GOOG" value="GOOG" >GOOGLE </option>
                    <option name="AMZN" value="AMZN" >AMAZON </option>
                    <option name="NKE" value="NKE" >NIKE </option>
                </select>
                <button onClick={this.fetchProfileStockInfo}>SUBMIT </button>
                <p>Stock Fluctuations</p>
                {
                    results.map(result => <StockInfo data={result} />)
                }
            </div>
        );
    }
}

export default StockWrapper;