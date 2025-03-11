import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function EditTransaction({}:{}){

    return (
        <Dialog>
            <DialogTrigger>Editar</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="w-full text-center">Transaction</DialogTitle>
                </DialogHeader>
                <form className="w-full flex flex-col items-center justify-center">
                <article className="w-full flex flex-col items-center justify-center">
                    <Label className="w-full text-center">Cantidad</Label>
                    <Input variant={"default"} btnSize={"default"} name={"number"} id={"amount"}/>
                </article>
                <article className="w-full flex flex-col items-center justify-center">
                    <Label className="w-full text-center">Fecha</Label>
                    <Input variant={"default"} btnSize={"default"} name={"date"} id={"concept"}/>
                </article>
                <article className="w-full flex flex-col items-center justify-center">
                    <Label className="w-full text-center">Concepto</Label>
                    <Input variant={"default"} btnSize={"default"} name={"text"} id={"concept"}/>
                </article>
                <article className="w-full flex flex-col items-center justify-center">
                    <Label className="w-full text-center">Tipo</Label>
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Seleccione tipo de transacción" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="EGRESS">Egreso</SelectItem>
                            <SelectItem value="INCOME">Ingreso</SelectItem>
                        </SelectContent>
                    </Select>
                </article>
                <Button>Crear</Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}