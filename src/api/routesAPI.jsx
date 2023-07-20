//User
export const userGetSubmissiveUsers =
  "http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8081/union/v1/users/submissives";

export const userUpdateNoPSW =
  "http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8081/union/v1/users/update/";

export const userGetUsersMe =
  "http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8081/union/v1/users/me";

export const userUpdateStatus =
  "http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8081/union/v1/users/update/status/";

export const userCreate =
  "http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8081/union/v1/users";

export const userGetAll =
  "http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8081/union/v1/users";
//Subject
export const subjectGetSubmissivesSubjects =
  "http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8089/union/v1/subjects/submissives";

export const subjectCreate =
  "http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8089/union/v1/subjects/create/user/";

export const subjectUpdate =
  "http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8089/union/v1/subjects/update/";

export const subjectUpdateStatusFinished =
  "http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8089/union/v1/subjects/update/finished/";

export const subjectUpdateStatus =
  "http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8089/union/v1/subjects/update/status/";

export const subjectUpdateStatusGood =
  "http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8089/union/v1/subjects/update/status/:id";

export const subjectUpdateStatusCanceled =
  "http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8089/union/v1/subjects/update/canceled/";
//Remark
export const remarkGetSubmissivesRemarks =
  "http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8088/union/v1/remarks/submissives";

export const remarkCreate =
  "http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8088/union/v1/remarks";

export const remarkUpdate =
  "http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8088/union/v1/remarks/update/";

export const remarkUpdateStatus =
  "crm-lb-353213555.us-east-1.elb.amazonaws.com:8088/union/v1/remarks/update/status/";

//Planner
export const plannerGetSubmissivesPlanners =
  "http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8086/union/v1/planners/submissives";

export const plannerCreate =
  "http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8086/union/v1/planners";

export const plannerUpdate =
  "http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8086/union/v1/planners/update/";

export const groupCreate = `http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8085/union/v1/groups`;

export const groupUpdate = `http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8085/union/v1/groups/update/`;

export const groupUpdateStatus = `http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8085/union/v1/groups/update/status/`;

export const attachUser = `http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8085/union/v1/groups/update/attach/`;

export const detachUser = `http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8085/union/v1/groups/update/detach/`;

export const groupGetUser =
  "http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8085/union/v1/groups/user/"; //adicionar id usuario

export const countUserGroup =
  "http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8085/union/v1/groups/count/user/"; //adicionar id usuario

export const getUsersGroup =
  "http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8085/union/v1/groups/usersGroup/"; //id do grupo

//client
export const clientGetClientsMyGroups =
  "http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8083/union/v1/clients/mygroups";

export const clientCreate =
  "http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8083/union/v1/clients/";

export const clientUpdateStatus = `http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8083/union/v1/clients/update/status/`;

export const clientUpdate =
  "http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8083/union/v1/clients/update/";

export const clientGetAll =
  "http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8083/union/v1/clients/";

//customer
export const customersGet =
  "http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8084/union/v1/customers";

export const customerCreate =
  "http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8084/union/v1/customers";

export const customerUpdate =
  "http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8084/union/v1/customers/update/";

export const customerUpdateStatus =
  "http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8084/union/v1/customers/update/status/";

//FetchRealise
export const realiseGetRealiseTrains =
  "http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8087/union/v1/releasetrains";

export const roleCreate =
  "http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8083/union/v1/clients/roles";

export const getTags =
  "http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8090/union/v1/tags";

//Forgot Password
export const forgotPass =
  "http://crm-lb-353213555.us-east-1.elb.amazonaws.com:8081/union/v1/users/forgotpwd";
