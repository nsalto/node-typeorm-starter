import { Business } from "entities/Business.entity";

export function getBusinessesWithinRadius(businesses: Business[], latitude: number, longitude: number, radius: number) {
    return businesses.filter(b => {
        const distance = calculateDistance(b.address.latitude, b.address.longitude, latitude, longitude);
        return distance <= radius;
    });
}

function calculateDistance(lat1: number, lng1: number, lat2: number, lng2: number) {
    const earthRadius = 6371; // km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRadius * c;
    return distance;
}