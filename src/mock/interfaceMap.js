import userHome from "./apis/userHome" // 个人主页的接口
import familyHome from "./apis/familyHome"
// import queryMobileProperties from "./queryMobileProperties";
// import pharmJoinProject from "./pharmJoinProject";
// import queryCourseList from "./queryCourseList";
// import queryProjectList from "./queryProjectList";
// import queryLiveList from "./queryLiveList";
// import queryChannelList from "./queryChannelList";
// import buyMake from "./buyMake";
// import cancelBuyMake from "./cancelBuyMake";
// import ActivityDetail from "./ActivityDetail";
// import courseDetail from "./courseDetail";
// import taskList from "./taskList";

export default {
  userHome: () => userHome,
  familyHome: () => familyHome
  // pharmJoinProject: () => pharmJoinProject,
  // queryCourseList: () => queryCourseList,
  // queryProjectList: () => queryProjectList,
  // queryIsJoinProject: () => queryIsJoinProject,
  // queryLiveList: () => queryLiveList,
  // queryChannelList: () => queryChannelList,
  // buyMake: () => buyMake,
  // cancelBuyMake: () => cancelBuyMake,
  // ActivityDetail: () => ActivityDetail,
  // courseDetail: () => courseDetail,
  // taskList: () => taskList
};