export class Blog {
    id: string;
    title: string;
    content: string;
    image: string[];
    created_at: Date;
    short_content: string;
    mots_cles: string[] = [];

    constructor(id: string, title: string, content: string, image: string[], created_at: Date, short_content: string, mots_cles: string[] = []) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.image = image;
        this.created_at = created_at;
        this.short_content = short_content;
        this.mots_cles = mots_cles;
    }

    static fromFirebase(data: any): Blog {
        return new Blog(
            data.id,
            data.get('Titre'),
            data.get('Texte'),
            data.get('Image').split(','),
            new Date(data.get('Date').toDate()),
            data.get('Texte').substring(0, 150) + '...',
            data.get('motCle').split(',')
        );
    }
}
