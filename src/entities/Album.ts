import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  import { v4 as uuid } from "uuid";
  
  @Entity("albums")
  class Album {
    @PrimaryColumn()
    readonly id!: string ;
  
    @Column()
      nomealbum!: string;
 
    @Column()
      data!: Date;  

    @Column()
      autor!: string;
  
    @CreateDateColumn()
      created_at!: Date;
  
    @UpdateDateColumn()
      updated_at!: Date;
  
    constructor() {
      if (!this.id) {
        this.id = uuid();
      }
    }
  }
  
  export { Album };