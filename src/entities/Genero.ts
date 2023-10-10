import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  import { v4 as uuid } from "uuid";
  
  @Entity("generos")
  class Genero {
    @PrimaryColumn()
    readonly id!: string ;
  
    @Column()
      nomegenero: string;
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
  
  export { Genero };