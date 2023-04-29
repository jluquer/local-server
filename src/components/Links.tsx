import { Component, ReactNode } from "react";

export default class Links extends Component {
  private serverIp = "192.168.1.64";
  render(): ReactNode {
    return <a href="{this.serverIp}:8000">Yatch</a>;
  }
}