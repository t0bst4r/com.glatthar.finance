import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {selectUsedUuids} from '../ngrx/selector/uuid.selectors';
import {map, take} from 'rxjs/operators';
import {v4 as uuidV4} from 'uuid';
import {useUuid} from '../ngrx/action/use-uuid.action';

@Injectable()
export class UuidService {

  constructor(private store$: Store) {
  }

  public generate(): Observable<string> {
    const result = new Promise<string>(resolve => {
      this.store$.select(selectUsedUuids).pipe(
        take(1),
        map(uuids => this.generateNewUuid(uuids))
      ).subscribe(uuid => {
        this.store$.dispatch(useUuid({uuid}));
        resolve(uuid);
      });
    });
    return from(result);
  }

  private generateNewUuid(uuids: Array<string>): string {
    let uuid: string;
    do {
      uuid = uuidV4();
    } while (uuids.includes(uuid));
    return uuid;
  }

}
