export default function passwordComplex(param: string): boolean {
    const INCLUDE_BOTH_DIGIT_AND_UPPECASE = /(?=.[A-Z])(?=.\d)/
    return INCLUDE_BOTH_DIGIT_AND_UPPECASE.test(param);
}