import { Conta } from "../model/Conta";
import { colors } from "../util/Colors"; 
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository {

    private listaContas: Array<Conta> = new Array<Conta>();
    numero: number = 0
    
    procurarPorNumero(numero: number): void {
        let buscaConta = this.buscarnoArray(numero);

        if (buscaConta != null) {
            buscaConta.visualizar();
        }else
            console.log(colors.fg.red,"\nA conta numero: " + numero + " não foi encontrada!", colors.reset);
    }

    listarTodas(): void {
        for (let conta of this.listaContas) {
            conta.visualizar()
        };
    }

    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log(colors.fg.green + "\nA Conta número: " + conta.numero + " foi criada com sucesso!" + colors.reset);
    }

    atualizar(conta: Conta): void {
        let buscaConta = this.buscarnoArray(conta.numero);

        if (buscaConta != null) {
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log(colors.fg.green, "\nA Conta numero: " + conta.numero +
                " foi atualizada com sucesso!", colors.reset);

        } else
            console.log(colors.fg.red, "\nA Conta numero " + conta.numero +
                " não foi encontrada!")

    }

    deletar(numero: number): void {

        let buscaConta = this.buscarnoArray(numero);

        if (buscaConta != null) {
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
            console.log(colors.fg.green, "\nA Conta numero: " + numero +
                " foi apagada com sucesso!", colors.reset);

        } else
            console.log(colors.fg.red, "\nA Conta numero " + numero +
                " não foi encontrada!")

    }



    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    public gerarNumero(): number {
        return ++ this.numero
    }

    public buscarnoArray(numero: number): Conta | null {
        for (let conta of this.listaContas) {
            if (conta.numero === numero)
                return conta;
        }

        return null
    }
    
}