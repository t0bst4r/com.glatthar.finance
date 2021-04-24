import {Account} from '../../model/account';

export interface AccountState {
  accounts: Record<string, Account>;
}
