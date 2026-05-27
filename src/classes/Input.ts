export class Input{
    private keys: Record<string, boolean> = {};

    constructor(){
        window.addEventListener('keydown', (e: KeyboardEvent) => {
            console.log("Has pulsado la tecla" + e.key);
            this.keys[e.key.toLocaleLowerCase()] = true;
        })

        window.addEventListener('keyup', (e: KeyboardEvent) => {
            console.log("Has soltado la tecla" + e.key);
            this.keys[e.key.toLocaleLowerCase()] = false;
        })
    }

    public isPressed(key: string): boolean{
        return !!this.keys[key.toLowerCase()];
    }
}