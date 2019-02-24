#include <stdio.h>

// C Program to create a simple binary file

// Define the structure of the records
struct planet {
    int position;
    char name[20];
    int moons;    // 4 bytes of padding follows
    double mass;
};

int main()
{
    struct planet solar_system[] = {
        { 1, "Mercury", 0, 0.06 },
        { 2, "Venus", 0, 0.82 },
        { 3, "Earth", 1, 1.00 },
        { 4, "Mars", 2, 0.11 },
        { 5, "Jupiter", 67, 317.8 },
        { 6, "Saturn", 62, 95.0 },
        { 7, "Uranus", 27, 14.5 },
        { 8, "Neptune", 14, 17.0 }
    };

    FILE * fd;
    int nplanets = sizeof solar_system / sizeof(struct planet);

    fd = fopen("planets.dat", "wb");

    fwrite(solar_system, sizeof(struct planet), nplanets, fd);
    fclose(fd);
    return 0;
}