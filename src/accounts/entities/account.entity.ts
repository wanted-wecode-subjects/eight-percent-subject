import { CoreEntity } from '../../core/entities/core.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Account extends CoreEntity {
  @Column({ unique: true })
  acc_num: string;

  @Column({ default: 0 })
  money: number;
}