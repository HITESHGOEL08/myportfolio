import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { Routes } from './routes/Routes';
import { googleAnalyticsService } from './services/googleAnalyticsService';
import { configureStore } from './redux/configureStore';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
googleAnalyticsService.initGA()

const store = configureStore()
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>
);
function sendToAnalytics({ id, name, value }:any) {
  console.log("Data Send to GA")
  googleAnalyticsService.sendEvent({
    eventCategory: 'Web Vitals',
    eventAction: name,
    eventValue: Math.round(name === 'CLS' ? value * 1000 : value),
    eventLabel: id,
    nonInteraction: true, // avoids affecting bounce rate
  });
}

reportWebVitals(sendToAnalytics);
reportWebVitals(console.log);
reportWebVitals(console.log);
reportWebVitals(console.log);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitalsreportWebVitals();
