import React, { useState, useEffect } from "react";
import * as THREE from "three";
import { Canvas } from "react-three-fiber";
import { useSprings, a } from "react-spring/three";

import Navigation from "../Navigation";
import Social from "../Social";
import Metadata from "../Metadata";
import * as styles from "./About.module.scss";
import useSiteMetadata from "../../hooks/use-site-metadata";

const BOXES = 15;
const COLORS = [
  "#A2CCB6",
  "#FCEEB5",
  "#8bcdcd",
  "#99f3bd",
  "lightpink",
  "lightblue",
  "#fabea7",
];

const getTitleColorHeader = (pathname) => {
  let colorHeader = "";
  if (pathname.includes("toolbox")) {
    colorHeader = "toolboxHeader";
  } else if (pathname.includes("contact")) {
    colorHeader = "contactHeader";
  } else if (pathname.includes("career")) {
    colorHeader = "careerHeader";
  } else {
    colorHeader = "defaultHeader";
  }
  return colorHeader;
};

const getHeadline = (pathname) => {
  let title = "";
  if (pathname.includes("toolbox")) {
    title = "Serial Builder";
  } else if (pathname.includes("contact")) {
    title = "Software Engineer";
  } else if (pathname.includes("career")) {
    title = "Technologist";
  } else {
    title = "Maker of Things";
  }
  return title;
};

const random = (i) => {
  const r = Math.random();
  return {
    position: [100 - Math.random() * 200, 100 - Math.random() * 200, i * 1.5],
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
    scale: [1 + r * 14, 1 + r * 14, 1],
    rotation: [0, 0, THREE.Math.degToRad(Math.round(Math.random()) * 45)],
  };
};

const data = new Array(BOXES).fill().map(() => {
  return {
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
    args: [0.1 + Math.random() * 9, 0.1 + Math.random() * 9, 10],
  };
});

function Content() {
  const [springs, set] = useSprings(BOXES, (i) => ({
    from: random(i),
    ...random(i),
    config: { mass: 20, tension: 150, friction: 50 },
  }));
  useEffect(
    () =>
      void setInterval(
        () => set((i) => ({ ...random(i), delay: i * 40 })),
        3000
      ),
    []
  );
  return data.map((d, index) => (
    <a.mesh key={index} {...springs[index]} castShadow receiveShadow>
      <boxBufferGeometry attach="geometry" args={d.args} />
      <a.meshStandardMaterial
        attach="material"
        color={springs[index].color}
        roughness={0.75}
        metalness={0.5}
      />
    </a.mesh>
  ));
}

function Lights() {
  return (
    <group>
      <pointLight intensity={0.3} />
      <ambientLight intensity={2} />
      <spotLight
        castShadow
        intensity={0.2}
        angle={Math.PI / 7}
        position={[150, 150, 250]}
        penumbra={1}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
    </group>
  );
}

const About = ({ location }) => {
  const siteMetadata = useSiteMetadata();
  const pathname = location.pathname;
  const titleColorHeader = getTitleColorHeader(pathname);
  const headline = getHeadline(pathname);

  const [zoomIn, setZoomIn] = useState("");
  const [activeCanvas, setActiveCanvas] = useState(false);

  useEffect(() => {
    setZoomIn(`animate__animated animate__zoomInDown`);
    setActiveCanvas(true);
  }, []);

  return (
    <div className={styles.container}>
      {activeCanvas && (
        <Canvas shadowMap camera={{ position: [0, 0, 100], fov: 100 }}>
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
            Richard is a Seasoned Software Engineer developing enterprise-grade
            applications and distributed systems since 2011. He capitalised on
            his technical experience helping various companies across Australia
            🇦🇺 in building software solutions that are{" "}
            <span className={styles.highLight1}>secure</span>,{" "}
            <span className={styles.highLight2}>scalable</span>, and{" "}
            <span className={styles.highLight3}>highly reliable</span>. His
            software development skills can bring significant value to the team
            and a positive ROI to your organization. He can help you deliver
            enterprise applications that will increase the business' revenue or
            reduce costs.
          </span>
        </p>
        <Social />
        <Metadata />
      </div>
    </div>
  );
};

export default About;
