export interface  Folder{
    id : number | null ;
    name:	string;
    pathName?:	string;
    description?:	string;
    creationDate?:	string;
    createdBy?:string;
    idParent	:number;
    isTerminal:	boolean;
    addBy:	number | null;
    nbDocument:	number | null;
    addPermission:	boolean |null ;
    editPermission:	boolean | null;
    deletePermission:boolean | null;
}