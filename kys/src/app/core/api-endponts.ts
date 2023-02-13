export const ApiEnpoints = {

    login: () => `http://103.224.246.103:3004/login` ,
    stateList : () => `http://103.224.246.103:3004/common/states/list`,
    districtList : () => `http://103.224.246.103:3004/common/distByState?state=`,
    books : ()  => `http://103.224.246.103:3004/book/`,
    plans : ()  => `http://103.224.246.103:3004/plan/`,
    campType : ()  => `http://103.224.246.103:3004/camp/camp-type/`,
    participantsType : ()  => `http://103.224.246.103:3004/camp/participants-type/`,
    campMaster : () => `http://103.224.246.103:3004/camp/camp-master/`,
    batchMaster : () => `http://103.224.246.103:3004/camp/batch-master/`,
      /////////////// member master == volunteer master
    volunteerMaster : () => `http://103.224.246.103:3004/camp/volunteer-master/`,
    ////////////// for subscriber , manage admin , manage address === >>>  userList

    userList : () => `http://103.224.246.103:3004/user/list/`,

    subscriptionList : () => `http://103.224.246.103:3004/subscription/list/`,

    deleteUser : () =>       `http://103.224.246.103:3004/user/deleteById?id=`,

    addUserList:() => `http://103.224.246.103:3004/user/`








}
