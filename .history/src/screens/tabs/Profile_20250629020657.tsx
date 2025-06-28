import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { text } from "../../text";
import { items } from "../../items";
import { hooks } from "../../hooks";
import { svg } from "../../assets/svg";
import { theme } from "../../constants";
import { components } from "../../components";

interface ProfileItemProps {
  title: string;
  containerStyle?: React.CSSProperties;
  navIcon?: boolean;
  onClick?: () => void;
}

export const Profile: React.FC = () => {
  const location = useLocation();
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
    };

    scrollToTop();
  }, [pathname]);

  const navigate = hooks.useNavigate();

  const renderImageBackground = (): JSX.Element => {
    return <components.Background version={1} />;
  };

  const renderHeader = (): JSX.Element => {
    return <components.Header title="সেটিংস" />;
  };

  const renderBottomTabBar = (): JSX.Element => {
    return <components.BottomTabBar />;
  };

  const renderContent = (): JSX.Element => {
    return (
      <main className="container">
        <div
          style={{
            width: "32%",
            margin: "0 auto",
            marginBottom: 20,
            marginTop: 20,
            position: "relative",
            cursor: "pointer",
            userSelect: "none",
          }}
          onClick={() => navigate("/profile/edit")}
        >
          <img
            src="https://scontent.fdac27-2.fna.fbcdn.net/v/t39.30808-6/393205049_822400306557498_7309767441203305084_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=BL4lCaDZiKgQ7kNvwH2Rqb3&_nc_oc=AdlXbXOYILlNXYVfptKZZx855aPGpJ5vr_SvT95fWHwC67HfTDKczO1a_OVP9CABgks&_nc_zt=23&_nc_ht=scontent.fdac27-2.fna&_nc_gid=gdSLdAe8xYpjFyv2Dy1yTg&oh=00_AfMluqc4qebuSJy5YnCsCCwR7cy9D_jUmr5rL2yjLUQ2Uw&oe=6865FB41"
            alt="Profile"
            style={{ width: "100%", height: "auto", borderRadius: "50%" }}
          />
          {/* <img
              src={require('../../assets/other/02.png')}
              alt='camera'
              style={{
                position: 'absolute',
                right: 0,
                bottom: 0,
                width: '30%',
                height: 'auto',
              }}
            /> */}
        </div>
        <text.H2 numberOfLines={1} style={{ textAlign: "center" }}>
          ইন্সপাইয়ার্ড আইটি
        </text.H2>
        <text.T16
          numberOfLines={1}
          style={{ textAlign: "center", marginBottom: 20 }}
        >
          info@inspireditbd.com
        </text.T16>
        <items.ProfileItem
          title="চারতলা মোড়, রংপুর"
          icon={
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7-7.5 11-7.5 11s-7.5-4-7.5-11a7.5 7.5 0 1115 0z"
              />
            </svg>
          }
          containerStyle={{ marginBottom: 6 }}
          onClick={() => {
            window.open(
              "https://www.google.com/maps/dir//Chartola+Mor,+College+Rd,+Rangpur+5400/@25.7325534,89.172427,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39e32d78aaf6f441:0x5353af3544d358c1!2m2!1d89.2548285!2d25.7325766?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D",
              "_blank"
            );
          }}
        />
        <items.ProfileItem
          title="inspireditbd.com"
          icon={<span>🌐</span>}
          containerStyle={{ marginBottom: 6 }}
          onClick={() => {
            window.open("https://inspireditbd.com", "_blank");
          }}
        />
        <items.ProfileItem
          title="info@inspireditbd.com"
          icon={
            <span role="img" aria-label="envelope" style={{ fontSize: 24 }}>
              ✉
            </span>
          }
          containerStyle={{ marginBottom: 6 }}
          onClick={() => {
            window.open("mailto:info@inspireditbd.com", "_blank");
          }}
        />
        <items.ProfileItem
          title="হেল্প অ্যান্ড সাপোর্ট"
          icon={<svg.HelpCirceSvg />}
          containerStyle={{ marginBottom: 6 }}
          onClick={() => {
            window.open("http://wa.me/+8801738240668", "_blank");
          }}
        />
        <items.ProfileItem
          navIcon={false}
          title="স্টুডেন্ট লগইন"
          icon={<svg.LogOutSvg />}
          containerStyle={{ marginBottom: 20 }}
          onClick={() => {
            navigate("/sign-in");
          }}
        />
      </main>
    );
  };

  return (
    <>
      {renderImageBackground()}
      {renderHeader()}
      {renderContent()}
      {renderBottomTabBar()}
    </>
  );
};
