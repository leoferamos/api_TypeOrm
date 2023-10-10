import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  import { v4 as uuid } from "uuid";
  
  @Entity("playlists")
  class Playlist {
    @PrimaryColumn()
    readonly id!: string ;
  
    @Column()
      name!: string;

    @Column()
      autor!:string;
      
    @Column()
       tempo!:string;
       
    @Column()
       datal!:string   
  
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
  
  export { Playlist };