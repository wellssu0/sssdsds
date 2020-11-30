import { AuthStore as AuthStoreModel } from './index';

export as namespace IAuthStore;

export interface AuthStore extends AuthStoreModel {}

export interface LoginParams {
  username: string;
  password: string;
  grant_type?: string;
  client_id?: string;
  client_secret?: string;
}

export interface TokenData {
  access_token: string;
  expires_in?: number | null;
  refresh_token?: string | null;
  scope?: string | null;
  token_type?: string | null;
}

export interface UserInfo {
  id?: string | null;
  name?: string | null;
  current_selected_disease?: string | null;
  permitted_disease?: IPermittedDisease[];
  permitted_project?: PermitEnum[];
  permitted_project_section?: ChainProjectEnum[];
  roles?: RoleEnum[];
}

export enum PermitEnum {
  CHAIN = 'chain',
  LANDSCAPE = 'landscape',
  NUGGET = 'nugget'
}

export enum ChainProjectEnum {
  CHAIN_DRUG = 'chain_drag',
  CHAIN_PATIENT = 'chain_patient',
  CHAIN_PV = 'chain_pv',
  CHAIN_RESEARCH = 'chain_research',
  CHAIN_TARGET = 'chain_target',
  CHAIN_TOPIC = 'chain_topic'
}

export enum ChainDragMode {
  SINGLE = 'single',
  COMPARISON = 'comparison'
}

/**
 * @description:  role-enum
 */
export enum RoleEnum {
  ADMIN = 'admin', // super admin
  ANALYST = 'analyst', // 分析者
  ANALYST_LEADER = 'analyst_leader', // 分析者leader
  INTERN = 'intern' // 住院实习医生
}
