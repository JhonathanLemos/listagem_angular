import { Produto } from "./Produto";

export class Cliente{
    id: number = 0;
    nome: string = '';
    produtos!: Produto[];
}