export class Input{
    private keys: Record<string, boolean> = {};

    constructor(){
        window.addEventListener('keydown', (e: KeyboardEvent) => {
            this.keys[e.key.toLocaleLowerCase()] = true;
        })

        window.addEventListener('keyup', (e: KeyboardEvent) => {
            this.keys[e.key.toLocaleLowerCase()] = false;
        })
    }

    public isPressed(key: string): boolean{
        return !!this.keys[key.toLowerCase()];
    }
}