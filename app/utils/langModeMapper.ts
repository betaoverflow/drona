interface LangType {
    [key: string]: string
}

const langModeMapper: LangType = {
    cpp: 'c_cpp',
    python: 'python',
}

export default langModeMapper
