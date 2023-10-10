import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  import { v4 as uuid } from "uuid";
  
  @Entity("musicas")
  class Musica {
    @PrimaryColumn()
    readonly id!: string ;
  
    @Column()
      name!: string;

      @Column()
      temp!: string;

      @Column()
      ano!: Date;

      @Column()
      artista!: string;
      
      @Column()
      letra!: string;
  
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
  
  export { Musica };