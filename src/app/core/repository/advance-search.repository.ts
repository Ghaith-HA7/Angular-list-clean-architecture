export abstract class AdvancedSearchRepository {
    public abstract setSearchText(text: string): void;
    public abstract getSearchText(): String;
    public abstract removeSearchText(): void;
}
