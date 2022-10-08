interface Feature<TParams, TResult> {
    execute(params: TParams): TResult;
}
