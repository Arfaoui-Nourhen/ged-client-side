export interface  Document{

id:number;
idDocumentType:number;
idDocumentFolder:number;
reference:string;
title?:string;
mediaType:string;
fileFormat:string;
fileName:string;
hasHardCopy?:string;
addingDate:string;
addedBy:number;
author?:string;
creationDate?:string;
langage?:string;
tags?:string;
description?:string;
customFields?:string;
userName?:string;
doctype?:string;
folderName?:string;
idEntity?:number;
physicalLocation?:string;
}