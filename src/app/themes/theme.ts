export interface Theme
{
    name: string;
    properties: any;
}

export const light: Theme = {
    
    name: "light",
    properties: {
        "--ax-background": "rgba(230, 224, 224, 0.05)",
        "--ax-bg-matcard" : "white",
        "--ax-color-detail": "rgb(160,160,160)",
        "--ax-color-title" :"rgba(40,40,40,0.8)",
        "--ax-bg-timer": "rgba(78, 161, 84,1)",
        "--ax-color-header" : "rgba(255,255,255)"
    }
};

export const dark: Theme = {
    
    name: "dark",
    properties: {
        "--ax-background": "rgba(0, 0, 0, 0.6)",
        "--ax-bg-matcard":"rgba(143,136,136,1)",
       "--ax-bg-timer": "rgba(213,217,79,1)",
        "--ax-color-detail": "rgb(255,255,255)",
        "--ax-color-title" :"rgba(240,240,240,1)",
        "--ax-color-header" : "rgba(145,145,215,1)",


    }
};