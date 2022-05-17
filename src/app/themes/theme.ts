export interface Theme
{
    name: string;
    properties: any;
}

export const light: Theme = {
    
    name: "light",
    properties: {
        "--ax-progress": "rgb(53,53,53)",
        "--ax-background": "rgba(230, 224, 224, 0.05)"
    }
};

export const dark: Theme = {
    
    name: "dark",
    properties: {
        "--ax-progress": "rgb(18,125,253)",
        "--ax-background": "rgba(40, 40, 40, 0.8)"
    }
};