import { SafeUrl } from '@angular/platform-browser';

export class Project {
    name: string;
    description: string;
    url: SafeUrl;
    markdown: string;

    constructor(name: string, desc: string, url: SafeUrl, mark: string) {
        this.name = name;
        this.description = desc;
        this.url = url;
        this.markdown = mark;
    }
}