import ReactGA from "react-ga";

export class googleAnalyticsService {
  static initGA = () => {
    ReactGA.initialize("G-J554NR5SH8", {
      gaOptions: {
        userId: `${window.crypto.getRandomValues(new Uint32Array(1))[0]}`,
        name: `user-${window.crypto.getRandomValues(new Uint32Array(1))[0]}`,
      },
      testMode: false,
    });
  };

  static sendEvent = (data: any) => {
    ReactGA.event(data);
  };
}
