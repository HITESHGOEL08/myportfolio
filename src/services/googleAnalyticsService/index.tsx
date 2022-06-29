// import ReactGA from "react-ga";

declare let gtag: Function;
export class googleAnalyticsService {
  
  static initGA = () => {
    // ReactGA.initialize("G-J554NR5SH8", {
    //   gaOptions: {
    //     userId: `${window.crypto.getRandomValues(new Uint32Array(1))[0]}`,
    //     name: `user-${window.crypto.getRandomValues(new Uint32Array(1))[0]}`,
    //   },
    //   debug: true,
    // });

    // gtag("js", new Date());

    // gtag("config", "G-J554NR5SH8", { page_path: window.location.pathname });
  };

  // static sendEvent = ({
  //   eventCategory,
  //   eventAction,
  //   eventValue,
  //   eventLabel,
  //   nonInteraction,
  // }: any) => {
  //   // ReactGA.ga("send", "event", data);
  //   ReactGA.event({
  //     category: eventCategory,
  //     action: eventAction,
  //     value: eventValue,
  //     label: eventLabel,
  //     nonInteraction,
  //   });
  // };
}
