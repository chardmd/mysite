import React, { useState, useEffect } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { useSprings, a } from "@react-spring/three";
import * as styles from "./About.module.scss";
import useSiteMetadata from "../../hooks/use-site-metadata";

import Navigation from "../Navigation";
import Social from "../Social";
import Metadata from "../Metadata";

const BOXES = 18;
const COLORS = [
  "#98FB98", // Mint Green
  "#B0E0E6", // Powder Blue
  "#FFA07A", // Light Salmon
  "#A2CCB6", // Light Sage Green
  "#FCEEB5", // Pale Yellow
  "#8bcdcd", // Light Teal
  "#99f3bd", // Pastel Green
  "#fabea7", // Peachy Pink
];

const getTitleColorHeader = (pathname) => {
  if (pathname.includes("contact")) return "contactHeader";

  return "defaultHeader";
};

const getHeadline = (pathname) => {
  if (pathname.includes("contact")) return "Technologist";
  return "Maker of Things";
};

const random = (i) => {
  const r = Math.random();
  return {
    position: [100 - Math.random() * 200, 100 - Math.random() * 200, i * 1.5],
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    scale: [1 + r * 14, 1 + r * 14, 1],
    rotation: [0, 0, THREE.Math.degToRad(Math.round(Math.random()) * 45)],
  };
};

const data = new Array(BOXES).fill().map(() => ({
  color: COLORS[Math.floor(Math.random() * COLORS.length)],
  args: [0.1 + Math.random() * 9, 0.1 + Math.random() * 9, 10],
}));

function Content() {
  const [springs, set] = useSprings(BOXES, (i) => ({
    from: random(i),
    ...random(i),
    config: { mass: 20, tension: 150, friction: 50 },
  }));
  useEffect(() => {
    const interval = setInterval(
      () => set((i) => ({ ...random(i), delay: i * 40 })),
      3000
    );

    return () => clearInterval(interval);
  }, []);

  return data.map((d, index) => (
    <a.mesh key={index} {...springs[index]} castShadow receiveShadow>
      <boxBufferGeometry attach="geometry" args={d.args} />
      <a.meshStandardMaterial
        attach="material"
        color={springs[index].color}
        roughness={0.5}
        metalness={0.5}
      />
    </a.mesh>
  ));
}

function Lights() {
  return (
    <group>
      <pointLight intensity={0.5} />
      <ambientLight intensity={1.85} />
      <spotLight
        castShadow
        intensity={0.2}
        angle={Math.PI / 7}
        position={[150, 150, 250]}
        penumbra={1}
        shadow-mapSize={2048}
      />
    </group>
  );
}

const About = ({ location }) => {
  const siteMetadata = useSiteMetadata();
  const { pathname } = location;
  const titleColorHeader = getTitleColorHeader(pathname);
  const headline = getHeadline(pathname);

  const [zoomIn, setZoomIn] = useState("");
  const [activeCanvas, setActiveCanvas] = useState(false);

  useEffect(() => {
    setZoomIn("animate__animated animate__zoomInDown");
    setActiveCanvas(true);
  }, []);

  return (
    <div className={styles.container}>
      {activeCanvas && (
        <Canvas
          flat
          shadows
          camera={{ position: [0, 0, 100], fov: 100 }}
          style={{
            position: "fixed",
            zIndex: 0,
          }}
        >
          <Lights />
          <Content />
        </Canvas>
      )}
      <div className={styles.wrapper}>
        <h1 className={`${styles.header} ${zoomIn}`}>{headline}</h1>
        <h2
          className={`${styles.header2} ${styles[titleColorHeader]} ${zoomIn}`}
        >
          {siteMetadata.headline}
        </h2>
        <Navigation location={location} />
        <p className={styles.paragraph}>
          <span>
            I am a Seasoned Software Engineer developing enterprise-grade
            applications and distributed systems since 2011. I capitalized on my
            technical experience helping startups and big companies in Australia
            🇦🇺 in building software solutions that are{" "}
            <span className={styles.highLight1}>highly scalable</span>,{" "}
            <span className={styles.highLight2}>reliable</span>, and{" "}
            <span className={styles.highLight3}>secure</span>. My software
            development skills can bring significant value to the team and a
            positive ROI to the business. I can help you deliver enterprise
            applications that can increase the company's revenue or reduce
            costs.
          </span>
        </p>
        <Social />
        <Metadata />
      </div>
    </div>
  );
};

export default About;
