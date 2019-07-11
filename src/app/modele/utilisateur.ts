export interface Utilisateur {
    _id?: string | number;
    nom?:string;
    identifiant:string | number;
    mdp:string | number;
    role?:number;
    mail?:string;
}
