import LocalStorage from "../../services/localStorage/localStorage";
import Dropdown from "../Dropdown/Dropdown";
import * as ICONS from "../../constants/svgIcons";
import { useTranslation } from "react-i18next";
function Language() {
  const { i18n } = useTranslation();
  const languages = [
    {
      id: 1,
      name: "English",
      language: "en",
      startIcon: ICONS.english,
    },
    {
      id: 2,
      name: "日本語",
      language: "ja",
      startIcon: ICONS.japanese,
    },
  ];
  const defaultLanguageItem = languages.find(
    (item) => item.language === LocalStorage.get("lang")
  );

  const defaultLanguage = defaultLanguageItem
    ? defaultLanguageItem.name
    : "English";
  const languagueDropdown = {
    element: <span>{defaultLanguage}</span>,
    options: languages,
    isShowArrowIcon: true,
  };
  const handleLanguagueDropdown = (data) => {
    i18n.changeLanguage(data.language);
    LocalStorage.set("lang", data.language);
  };
  return (
    <Dropdown
      content={languagueDropdown}
      handleOutputItem={handleLanguagueDropdown}
    />
  );
}

export default Language;
