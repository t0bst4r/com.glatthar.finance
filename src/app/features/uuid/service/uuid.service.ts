import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Store} from '@ngrx/store';
import {selectUsedUuids} from '../ngrx/selector/uuid.selectors';
import {map, take, tap} from 'rxjs/operators';
import {v4 as uuidV4} from 'uuid';
import {useUuid} from '../ngrx/action/use-uuid.action';

@Injectable()
export class UuidService {

  private static generateNewUuid(uuids: Array<string>): string {
    let uuid: string;
    do {
      uuid = uuidV4();
    } while (uuids.includes(uuid));
    return uuid;
  }

  constructor(private store$: Store) {
  }

  public getUsedUuids(): Observable<Array<string>> {
    return this.store$.select(selectUsedUuids);
  }

  public generate(): Observable<string> {
    return this.getUsedUuids().pipe(
      take(1),
      map(uuids => UuidService.generateNewUuid(uuids)),
      tap(uuid => this.store$.dispatch(useUuid({uuid})))
    );
  }

}
