export const sortOptions = [
    {
        label: 'Relevance',
        value: 'relevance'
    },
    {
        label: 'Availability',
        value: 'availability'
    },
    {
        label: 'Nearby',
        value: 'distance'
    },
    {
        label: 'Price - low to high',
        value: 'price_ascending'
    },
    {
        label: 'Price - high to low',
        value: 'price_descending'
    },
    {
        label: 'Years of Experience',
        value: 'experience'
    },
    {
        label: 'Most Liked',
        value: 'rating'
    },
]

// export const filterKeys = [
//     'Mode Of Consult',
//     'Experience (In Years)',
//     'Fees (In Rupees)',
//     'Language',
//     'Facility'
// ]

export const filterLabels = {
    consultMode: 'Mode Of Consult',
    experience: 'Experience (In Years)',
    fees: 'Fees (In Rupees)',
    language: 'Language',
    facilityType: 'Facility'
}

export const filterOptions = {
    'consultMode': [
        {
            label: 'Hospital Visit',
            value: 'PHYSICAL',
        },
        {
            label: 'Online Consult',
            value: 'ONLINE'
        }
    ],
    'experience': [
        {
            label: '0-5',
            value: '0-5',
            queryValue: {
                min: 0,
                max: 5
            }
        },
        {
            label: '6-10',
            value: '6-10',
            queryValue: {
                min: 6,
                max: 10
            }
        },
        {
            label: '11-16',
            value: '11-16',
            queryValue: {
                min: 11,
                max: 16
            }
        },
        {
            label: '16+',
            value: '16+',
            queryValue: {
                min: 16,
            }
        },
    ],
    'fees': [
        {
            label: '100-500',
            value: '100-500',
            queryValue: {
                min: 100,
                max: 500
            }
        },
        {
            label: '500-1000',
            value: '500-1000',
            queryValue: {
                min: 500,
                max: 1000
            }
        },
        {
            label: '1000+',
            value: '1000+',
            queryValue: {
                min: 1000,
            }
        },
    ],
    'language': [
        {
            label: 'English',
            value: 'English'
        },
        {
            label: 'Hindi',
            value: 'Hindi'
        },
        {
            label: 'Telugu',
            value: 'Telugu'
        },
        {
            label: 'Punjabi',
            value: 'Punjabi'
        },
        {
            label: 'Bengali',
            value: 'Bengali'
        },
        {
            label: 'Marathi',
            value: 'Marathi'
        },
        {
            label: 'Urdu',
            value: 'Urdu'
        },
        {
            label: 'Gujarati',
            value: 'Gujarati'
        },
        {
            label: 'Tamil',
            value: 'Tamil'
        },
        {
            label: 'Kannada',
            value: 'Kannada'
        },
        {
            label: 'Oriya',
            value: 'Oriya'
        },
        {
            label: 'Persion',
            value: 'Persion'
        },
        {
            label: 'Assamese',
            value: 'Assamese'
        },
    ],
    'facilityType': [
        {
            label: 'Apollo Hospital',
            value: 'HOSPITAL'
        },
        {
            label: 'Other Clinics',
            value: 'OUTPATIENT_CLINICS'
        },
    ]
}

