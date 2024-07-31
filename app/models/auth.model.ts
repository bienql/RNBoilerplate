export interface LoginRequest {
  userNameOrEmailAddress: string;
  password: string;
  Rememberclient: boolean;
}

export interface LoginResponse {
  accessToken: string;
}

export interface DeviceInfo {
  deviceId: string;
  deviceToken: string;
  deviceModel: string;
  appName: string;
  appVersion: string;
  pushAlert: boolean;
}

export interface User {
  numberCode?: string;
  userName: string;
  name: string;
  surname?: string;
  email: string;
  contactNo?: string;
  mobileNo?: string;
  password: string;
  gender?: string;
  salutation: string;
  nationality: string;
  maritalStatus: string;
  passport: string;
  country: string;
  incomeGroupCode: string;
  occupationCode: string;
  address1: string;
  address2: string;
  address3: string;
  postalCode: string;
  countryCode: string;
  areaCode: string;
  mailingSubscriptions: [
    {
      name: string;
    },
  ];
  smsSubscription: boolean;
  dob: Date;
  interestGroupLists: InteresItem[];
  dynamicFieldLists: [];
  signupLocationCode: string;
  campaignCode: string;
  campaignType: string;
  promotionCode: string;
  cardNo: string;
  referralCode: string;
  imageFileName: string;
}

interface InteresItem {
  name: string;
}

export interface ItemPublicGame {
  id: Number;
  chanceType: Number;
  chanceValueTypeCode: String;
  code: String;
  displayName: String;
  startDateTime: Date;
  endDateTime: Date;
  gameType: Number;
  gameConfig: {
    url: String;
    params: Object;
  };
  maxTriesPerDay: null;
}

export interface PublicGame {
  totalCount: Number;
  item: Array<ItemPublicGame>;
}

export interface PublicGameRequest {
  SkipCount: Number;
  MaxResultCount: Number;
  Sorting: String;
}

export interface UploadImageRespone {
  fileName: string;
  fileUrl: string;
  code: number;
  message: string;
  details: string;
  validationErrors: string;
}

export interface UploadImageRequest {
  mode: string;
  formdata: [
    {
      key: string;
      type: string;
      src: any;
    },
  ];
}

export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
}

export interface GetInteresRespone {
  [key: string]: string;
}

export interface Interes {
  interCode: string;
  interName: string;
  active: boolean;
}

export interface ResetPasswordRequest {
  channel: number;
  identifier: string;
}

export interface CheckMobileNumberRespone {
  result: boolean;
  targetUrl: string;
  success: boolean;
  error: string;
  unAuthorizedRequest: boolean;
  __abp: boolean;
}

export interface CheckEmailAvailableRespone {
  result: boolean;
  targetUrl: string;
  success: boolean;
  error: string;
  unAuthorizedRequest: boolean;
  __abp: boolean;
}

export interface checkPromoCodeRequest {
  promoCode: string;
}
