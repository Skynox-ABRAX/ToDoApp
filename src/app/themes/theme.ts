export interface Theme
{
    name: string;
    properties: any;
}

export const light: Theme = {
    
    name: "light",
    properties: {
        "--ax-progress": "rgb(53,53,53)"
    }
};

export const dark: Theme = {
    
    name: "dark",
    properties: {
        "--ax-progress": "rgb(18,125,253)"
    }
};