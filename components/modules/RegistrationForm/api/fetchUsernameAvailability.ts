export default async function fetchUsernameAvailability(username: string) {
    const { available } = await $fetch<{ available: boolean }>('')
    return available;
}