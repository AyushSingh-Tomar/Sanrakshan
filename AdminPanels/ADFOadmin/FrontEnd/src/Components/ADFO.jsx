import React from "react";
import { assets } from "../assets/assets";
import "./ADFO.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ADFO = () => {
  useGSAP(() => {
    gsap.from(".devices", {
      x: 50,
      duration: 3,
      opacity: 0,
    });
    gsap.from(".devices2", {
      y: 50,
      duration: 3,
      delay: 2,
      opacity: 0,
    });
    gsap.from(".devices3", {
      x: 50,
      duration: 5,
      opacity: 0,
    });
  });
  return (
    <div>
      <div>
        <hr />
        <p className="para">
          In a fire station, IoT devices can greatly enhance operational
          efficiency, safety, and communication.
        </p>
        <div className="row">
          <div className="column">
            <p className="devices">
              <b>In Emergency Alert Systems</b> <br /> Smart Alarms: Automated
              systems that can send alerts to firefighters' devices or systems
              when an alarm is triggered, providing real-time updates.
            </p>
          </div>
          <div className="column">
            <p className="devices2">
              <b> In Vehicles</b> <br /> Maintenance Monitoring: Sensors that
              monitor vehicle conditions, such as oil levels and tire pressure,
              to schedule maintenance and prevent breakdowns.
            </p>
          </div>
          <div className="column">
            <p className="devices">
              <b>In Building Management</b> <br /> IoT devices to monitor and
              control energy usage, including lighting and heating, to reduce
              operational costs.
            </p>
          </div>
          <div className="column">
            <p className="devices2">
              <b>In Health and Safety </b> <br /> Monitors for firefighters’
              vital signs, such as heart rate and body temperature, to detect
              signs of distress and ensure safety during operations.
            </p>
          </div>
          <div className="column">
            <p className="devices">
              <b> In Water Management</b> <br /> IoT sensors to monitor the
              status and pressure of fire hydrants, ensuring they are functional
              and accessible when needed.
            </p>
          </div>
        </div>
      </div>
      <div>
        <hr />
        <p className="infra">
          Infrastructure under Assistant Divisional Fire Officer
        </p>
        <img className="mall" src={assets.Db_mall} alt="not found" />
        <img className="mall" src={assets.hospital} alt="not found" />
        <img
          className="mall"
          src={assets.residential_building}
          alt="not found"
        />
      </div>
      <br />
      <hr />
      <div className="infra1"> Devices installed</div>
      <img className="mall3" src={assets.fire_sprinkler} alt="not found" />
      <p className="para2"> Fire Sprinkler</p>
      <img className="mall3" src={assets.lpg} alt="not found" />
      <p className="para3"> LPG leakage detector</p>
      <img className="mall2" src={assets.voc} alt="not found" />
      <p className="para3"> VOC detector device</p>
      <img className="mall2" src={assets.gas_detector} alt="not found" />
      <p className="para2"> Gas Detector</p>
    </div>
  );
};

export default ADFO;
