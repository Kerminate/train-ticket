import React, { useCallback, useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './App.css';

import CitySelector from '../common/CitySelector';
import Header from '../common/Header';
import DepartDate from './DepartDate';
import HighSpeed from './HighSpeed';
import Journey from './Journey';
import Submit from './Submit';

import { exchangeFromTo, showCitySelector, hideCitySelector, fetchCityData } from './actions';

function App(props) {
  const {
    from,
    to,
    isCitySelectorVisible,
    cityData,
    isLoadingCityData,
    dispatch
  } = props;

  const onBack = useCallback(() => {
    window.history.back();
  }, []);

  const cbs = useMemo(() => {
    return bindActionCreators({
      exchangeFromTo,
      showCitySelector
    }, dispatch);
  }, [dispatch]);

  const citySelectorCbs = useMemo(() => {
    return bindActionCreators({
        onBack: hideCitySelector,
        fetchCityData
      }, dispatch);
  }, [dispatch]);

  return (
    <div>
      <div className="header-wrapper">
        <Header title="火车票" onBack={onBack} />
      </div>
      <form className="form">
        <Journey from={from} to={to} {...cbs} />
        <DepartDate />
        <HighSpeed />
        <Submit />
      </form>
      <CitySelector
        show={isCitySelectorVisible}
        cityData={cityData}
        isLoading={isLoadingCityData}
        {...citySelectorCbs}
      />
    </div>
  );
}

// const mapStateToProps = state => ({state});

// const mapDispatchToProps = dispatch => ({dispatch});

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);
export default connect(
  function mapStateToProps(state) {
    return state;
  },
  function mapDispatchToProps(dispatch) {
    return { dispatch };
  }
)(App);
