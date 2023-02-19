import styled from "@emotion/styled";
import { useState } from "react";

import SettingsHeader from "../components/settings-comp/SettingsHeader";
import ProgressBar from "../components/reusable-comp/Progress";
import SettingsListNames from "../components/settings-comp/SettingsListNames";
import SettingForms from "../components/settings-comp/SettingForms";

function Settings() {
  const [settingValues, setSettingValues] = useState({
    Basic: { name: "Basic Settings", val: [] },
    Hero: { name: "Hero Image", val: [] },
  });
  const names = Object.keys(settingValues);
  const [toggle, setToggle] = useState("Basic");

  function checkComplete() {
    if (
      settingValues.Basic.val.length > 0 &&
      settingValues.Hero.val.length > 0
    ) {
      document.getElementById("completeNext").classList.add("sectionComplete");
    }
  }

  function getModifySectionValueFor(sectionName) {
    return function modifySectionValue(newValue) {
      const newSettingValues = { ...settingValues };

      newSettingValues[sectionName].val = newValue;
      setSettingValues(newSettingValues);
      checkComplete();
    };
  }

  return (
    <SettingsContainer>
      {/* add what happens when form is complete. an alert or go back to dashboard */}
      <SettingsHeader />
      <ProgressBar name="Settings" />
      <SettingsBoxes>
        <SettingsListNames
          settingValues={settingValues}
          toggleFunction={setToggle}
          SettingName={names}
        />
        <SettingForms
          settingValues={settingValues}
          toggle={toggle}
          modifyValue={getModifySectionValueFor(toggle)}
        />
      </SettingsBoxes>
    </SettingsContainer>
  );
}

const SettingsContainer = styled.div`
  background-color: #f1f4f8;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 1400px;
  height: 100vh;
  overflow: auto;
`;
const SettingsBoxes = styled.div`
  display: flex;
  flex-direction: row;
  width: calc(100% - 46px);
  margin-top: 34px;
  gap: 23px;
  padding-bottom: 24px;
`;

export default Settings;
