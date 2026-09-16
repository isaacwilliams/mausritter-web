export type NounContext = 'masc' | 'fem' | 'neut' | 'plural' | (string & {});

export type FormVariants = Record<NounContext, string>;

export type NamedWithContext = {
    name: string | FormVariants;
    context: NounContext;
};

export type Term = string | FormVariants | NamedWithContext;
