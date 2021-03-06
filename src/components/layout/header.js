import React from "react";
import { Layout, Select } from "antd";
import "./header.css";
import i18n from "../../i18n";
import { withNamespaces } from "react-i18next";

const Header = ({ t }) => {
  const { Header } = Layout;
  const { Option } = Select;
  const dataLocal = localStorage.getItem("languageOfProjectCovid");
  const language = dataLocal !== null ? JSON.parse(dataLocal) : "jp";
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("languageOfProjectCovid", JSON.stringify(lng));
  };
  return (
    <Header
      style={{
        position: "fixed",
        zIndex: 1,
        width: "100%",
        background: "#AE8787",
        opacity: ".8",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        lineHeight: '1.571',
        padding: '0 15px'
      }}
    >
      {/* <div className="logo" /> */}
      <div style={{ marginRight: '15px'}}>
        <span
          style={{
            fontFamily: "Open Sans,sans-serif",
            fontWeight: "300",
            color: "white",
          }}
        >
          {t("Coronavirus Disease 2020 (COVID-19)")}
        </span>
      </div>
      <Select
        defaultValue={language}
        style={{ width: 120, height: "50%", backgroundColor: "red" }}
        // dropdownStyle={{backgroundColor:'red'}}
        className="ant-select-selection"
        onChange={(value) => changeLanguage(value)}
      >
        <Option value="en">English</Option>
        <Option value="vn">Tiếng Việt</Option>
        <Option value="jp">日本語</Option>
      </Select>
    </Header>
  );
};

export default withNamespaces()(Header);
