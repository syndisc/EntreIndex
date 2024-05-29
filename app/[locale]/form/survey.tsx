export const surveyJson = {
    pages: [
        {
            elements: [
                {
                    name: "sector",
                    title: "Sektor Usaha",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Mikro (Aset s/d Rp. 50 jt & omzet penjualan tahunan s/d Rp. 300 jt)" },
                        { value: 2, text: "Kecil (Aset Rp. 50 jt - Rp. 500 jt & omzet penjualan tahunan s/d Rp. 300 jt - Rp. 2,5 Miliar)" },
                        { value: 3, text: "Menengah (Aset Rp. 500 jt - Rp. 10 Miliar & omzet penjualan tahunan s/d Rp. 2,5 Miliar - Rp. 50 Miliar)" },
                        { value: 4, text: "Besar (Aset > Rp. 10 Miliar & omzet penjualan tahunan > Rp. 50 Miliar)" }
                    ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "jenis",
                    title: "Jenis Usaha",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Usaha Pertanian (Agriculture)" },
                        { value: 2, text: "Usaha Pertambangan (Mining)" },
                        { value: 3, text: "Usaha Pabrikasi (Manufacturing)" },
                        { value: 4, text: "Usaha Konstruksi (Construction)" },
                        { value: 5, text: "Usaha Perdagangan (Trade)" },
                        { value: 6, text: "Usaha Jasa Keuangan (Financial Service)" },
                        { value: 7, text: "Usaha Jasa Perorangan (Personal Service)" },
                        { value: 8, text: "Bidang Jasa-jasa Umum (Public Service)" },
                        { value: 9, text: "Bidang Jasa Wisata (Tourism)" },
                        { value: 10, text: "Usaha Mikro" },
                        { value: 11, text: "Lainnya" }
                    ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "status",
                    title: "Kegiatan Status Usaha",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sedang memulai usaha" },
                        { value: 2, text: "Usahanya telah berjalan" },
                        { value: 3, text: "Usahanya telah berjalan dan sedang merintis hal baru/pengembangan usaha" }
                    ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "pendidikan",
                    title: "Pendidikan Terakhir",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "SD" },
                        { value: 2, text: "SMP" },
                        { value: 3, text: "SMA" },
                        { value: 4, text: "SMK" },
                        { value: 5, text: "S1" },
                        { value: 6, text: "S2" },
                        { value: 7, text: "S3" }
                    ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "pengalaman",
                    title: "Pengalaman menjadi wirausahawan/wati",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "< 4 Tahun" },
                        { value: 2, text: "4 - 10 Tahun" },
                        { value: 3, text: "11 - 15 Tahun" },
                        { value: 4, text: "> 15 Tahun" }
                    ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "1",
                    title: "Pemerintah telah mengupayakan pendidikan kewirausahaan melalui pelatihan.",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sangat Tidak Setuju" },
                        { value: 2, text: "Tidak Setuju" },
                        { value: 3, text: "Setuju" },
                        { value: 4, text: "Sangat Setuju" }
                    ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "2",
                    title: "Pemerintah telah memberi kesempatan kaum muda untuk berwirausaha.",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sangat Tidak Setuju" },
                        { value: 2, text: "Tidak Setuju" },
                        { value: 3, text: "Setuju" },
                        { value: 4, text: "Sangat Setuju" }
                    ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "3",
                    title: "Pemerintah membantu wirausahawan Indonesia agar mampu menyelaraskan dengan pasar lokal dengan standar internasional.",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sangat Tidak Setuju" },
                        { value: 2, text: "Tidak Setuju" },
                        { value: 3, text: "Setuju" },
                        { value: 4, text: "Sangat Setuju" }
                    ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "4",
                    title: "Pemerintah telah menetapkan peraturan yang melindungi konsumen dan wirausahawan.",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sangat Tidak Setuju" },
                        { value: 2, text: "Tidak Setuju" },
                        { value: 3, text: "Setuju" },
                        { value: 4, text: "Sangat Setuju" }
                    ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "5",
                    title: "Saya mampu melihat peluang usaha jauh ke depan.",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sangat Tidak Setuju" },
                        { value: 2, text: "Tidak Setuju" },
                        { value: 3, text: "Setuju" },
                        { value: 4, text: "Sangat Setuju" }
                    ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "6",
                    title: "Saya mampu mengembangkan ide inovatif dalam berusaha.",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sangat Tidak Setuju" },
                        { value: 2, text: "Tidak Setuju" },
                        { value: 3, text: "Setuju" },
                        { value: 4, text: "Sangat Setuju" }
                    ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "7",
                    title: "Saya mampu menjadikan hambatan bisnis menjadi peluang.",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sangat Tidak Setuju" },
                        { value: 2, text: "Tidak Setuju" },
                        { value: 3, text: "Setuju" },
                        { value: 4, text: "Sangat Setuju" }
                    ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "8",
                    title: "Saya fokus dalam mengembangkan usaha.",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sangat Tidak Setuju" },
                        { value: 2, text: "Tidak Setuju" },
                        { value: 3, text: "Setuju" },
                        { value: 4, text: "Sangat Setuju" }
                    ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "9",
                    title: "Birokrasi saat ini mempermudah kewirausahaan di Indonesia.",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sangat Tidak Setuju" },
                        { value: 2, text: "Tidak Setuju" },
                        { value: 3, text: "Setuju" },
                        { value: 4, text: "Sangat Setuju" }
                    ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "10",
                    title: "Pemerintah menyediakan program untuk mengembangkan kewirausahaan.",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sangat Tidak Setuju" },
                        { value: 2, text: "Tidak Setuju" },
                        { value: 3, text: "Setuju" },
                        { value: 4, text: "Sangat Setuju" }
                    ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "11",
                    title: "Saya memperhatikan kebutuhan konsumen internasional.",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sangat Tidak Setuju" },
                        { value: 2, text: "Tidak Setuju" },
                        { value: 3, text: "Setuju" },
                        { value: 4, text: "Sangat Setuju" }
                    ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "12",
                    title: "Saya mengembangkan usaha berorientasi pada komersialisasi internasional.",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sangat Tidak Setuju" },
                        { value: 2, text: "Tidak Setuju" },
                        { value: 3, text: "Setuju" },
                        { value: 4, text: "Sangat Setuju" }
                    ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "13",
                    title: "Saya peduli terhadap kompetitor sebagai feedback.",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sangat Tidak Setuju" },
                        { value: 2, text: "Tidak Setuju" },
                        { value: 3, text: "Setuju" },
                        { value: 4, text: "Sangat Setuju" }
                    ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "14",
                    title: "Saya peduli atas dampak produk usaha yang saya kembangkan.",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sangat Tidak Setuju" },
                        { value: 2, text: "Tidak Setuju" },
                        { value: 3, text: "Setuju" },
                        { value: 4, text: "Sangat Setuju" }
                    ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "15",
                    title: "Saya mempelajari trend terkini.",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sangat Tidak Setuju" },
                        { value: 2, text: "Tidak Setuju" },
                        { value: 3, text: "Setuju" },
                        { value: 4, text: "Sangat Setuju" }
                    ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "16",
                    title: "Dengan teknologi, membuat usaha saya semakin maju.",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sangat Tidak Setuju" },
                        { value: 2, text: "Tidak Setuju" },
                        { value: 3, text: "Setuju" },
                        { value: 4, text: "Sangat Setuju" }
                    ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "17",
                    title: "Saya mendalami berbagai aspek untuk mengembangkan usaha.",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sangat Tidak Setuju" },
                        { value: 2, text: "Tidak Setuju" },
                        { value: 3, text: "Setuju" },
                        { value: 4, text: "Sangat Setuju" }
                    ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "18",
                    title: "Saya mampu mengatasi kegagalan.",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sangat Tidak Setuju" },
                        { value: 2, text: "Tidak Setuju" },
                        { value: 3, text: "Setuju" },
                        { value: 4, text: "Sangat Setuju" }
                    ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "19",
                    title: "Saya gigih mencari informasi baru yang relevan.",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sangat Tidak Setuju" },
                        { value: 2, text: "Tidak Setuju" },
                        { value: 3, text: "Setuju" },
                        { value: 4, text: "Sangat Setuju" }
                    ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "20",
                    title: "Saya percaya diri dengan bidang usaha saat ini.",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sangat Tidak Setuju" },
                        { value: 2, text: "Tidak Setuju" },
                        { value: 3, text: "Setuju" },
                        { value: 4, text: "Sangat Setuju" }
                    ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "21",
                    title: "Saya mengembangkan usaha dengan targetnya mengubah paradigma konsumen.",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sangat Tidak Setuju" },
                        { value: 2, text: "Tidak Setuju" },
                        { value: 3, text: "Setuju" },
                        { value: 4, text: "Sangat Setuju" }
                    ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "22",
                    title: "Saya mengambil inisiatif ketika ada masalah.",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sangat Tidak Setuju" },
                        { value: 2, text: "Tidak Setuju" },
                        { value: 3, text: "Setuju" },
                        { value: 4, text: "Sangat Setuju" }
                    ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "23",
                    title: "Saya membangun budaya usaha yang fokusnya pada hasil.",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sangat Tidak Setuju" },
                        { value: 2, text: "Tidak Setuju" },
                        { value: 3, text: "Setuju" },
                        { value: 4, text: "Sangat Setuju" }
                    ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "24",
                    title: "Saya yakin berwirausaha adalah pilihan profesi yang tepat.",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sangat Tidak Setuju" },
                        { value: 2, text: "Tidak Setuju" },
                        { value: 3, text: "Setuju" },
                        { value: 4, text: "Sangat Setuju" }
                    ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "25",
                    title: "Saya membagikan ide dengan jelas.",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sangat Tidak Setuju" },
                        { value: 2, text: "Tidak Setuju" },
                        { value: 3, text: "Setuju" },
                        { value: 4, text: "Sangat Setuju" }
                    ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "26",
                    title: "Saya dikenal dengan value yang saya anut.",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sangat Tidak Setuju" },
                        { value: 2, text: "Tidak Setuju" },
                        { value: 3, text: "Setuju" },
                        { value: 4, text: "Sangat Setuju" }
                    ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "27",
                    title: "Saya suka membuat produk yang berbeda.",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sangat Tidak Setuju" },
                        { value: 2, text: "Tidak Setuju" },
                        { value: 3, text: "Setuju" },
                        { value: 4, text: "Sangat Setuju" }
                    ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "28",
                    title: "Saya peka adanya perubahan.",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sangat Tidak Setuju" },
                        { value: 2, text: "Tidak Setuju" },
                        { value: 3, text: "Setuju" },
                        { value: 4, text: "Sangat Setuju" }
                    ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "29",
                    title: "Saya fleksibel terhadap perubahan.",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sangat Tidak Setuju" },
                        { value: 2, text: "Tidak Setuju" },
                        { value: 3, text: "Setuju" },
                        { value: 4, text: "Sangat Setuju" }
                    ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "30",
                    title: "Saya mampu mempertahankan kinerja saat ada perubahan.",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sangat Tidak Setuju" },
                        { value: 2, text: "Tidak Setuju" },
                        { value: 3, text: "Setuju" },
                        { value: 4, text: "Sangat Setuju" }
                    ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "31",
                    title: "Saya bekerja dengan tuntas sesuai job deskripsi.",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sangat Tidak Setuju" },
                        { value: 2, text: "Tidak Setuju" },
                        { value: 3, text: "Setuju" },
                        { value: 4, text: "Sangat Setuju" }
                    ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "32",
                    title: "Saya mampu bertahan di lingkungan yang kompetitif.",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sangat Tidak Setuju" },
                        { value: 2, text: "Tidak Setuju" },
                        { value: 3, text: "Setuju" },
                        { value: 4, text: "Sangat Setuju" }
                    ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "33",
                    title: "Saya mampu mengatasi kompetitor.",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sangat Tidak Setuju" },
                        { value: 2, text: "Tidak Setuju" },
                        { value: 3, text: "Setuju" },
                        { value: 4, text: "Sangat Setuju" }
                    ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "34",
                    title: "Peluang adalah kesempatan emas.",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sangat Tidak Setuju" },
                        { value: 2, text: "Tidak Setuju" },
                        { value: 3, text: "Setuju" },
                        { value: 4, text: "Sangat Setuju" }
                    ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "35",
                    title: "Saya terampil mendirikan bisnis baru.",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sangat Tidak Setuju" },
                        { value: 2, text: "Tidak Setuju" },
                        { value: 3, text: "Setuju" },
                        { value: 4, text: "Sangat Setuju" }
                    ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "36",
                    title: "Saya berani mengambil risiko.",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sangat Tidak Setuju" },
                        { value: 2, text: "Tidak Setuju" },
                        { value: 3, text: "Setuju" },
                        { value: 4, text: "Sangat Setuju" }
                    ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "37",
                    title: "Saya memiliki jejaring yang luas dari berbagai bidang.",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sangat Tidak Setuju" },
                        { value: 2, text: "Tidak Setuju" },
                        { value: 3, text: "Setuju" },
                        { value: 4, text: "Sangat Setuju" }
                    ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "38",
                    title: "Saya hidup di lingkungan komunitas berwirausaha.",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sangat Tidak Setuju" },
                        { value: 2, text: "Tidak Setuju" },
                        { value: 3, text: "Setuju" },
                        { value: 4, text: "Sangat Setuju" }
                    ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "39",
                    title: "Saya mampu menangkap kebutuhan di masa depan.",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sangat Tidak Setuju" },
                        { value: 2, text: "Tidak Setuju" },
                        { value: 3, text: "Setuju" },
                        { value: 4, text: "Sangat Setuju" }
                    ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "40",
                    title: "Saya mampu menyusun strategi yang baik bagi usaha saya.",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sangat Tidak Setuju" },
                        { value: 2, text: "Tidak Setuju" },
                        { value: 3, text: "Setuju" },
                        { value: 4, text: "Sangat Setuju" }
                    ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "41",
                    title: "Saya terampil dalam memimpin tim.",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sangat Tidak Setuju" },
                        { value: 2, text: "Tidak Setuju" },
                        { value: 3, text: "Setuju" },
                        { value: 4, text: "Sangat Setuju" }
                    ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "42",
                    title: "Saya terampil memanfaatkan teknologi.",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sangat Tidak Setuju" },
                        { value: 2, text: "Tidak Setuju" },
                        { value: 3, text: "Setuju" },
                        { value: 4, text: "Sangat Setuju" }
                    ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "43",
                    title: "Menjadi wirausaha adalah pilihan saya.",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sangat Tidak Setuju" },
                        { value: 2, text: "Tidak Setuju" },
                        { value: 3, text: "Setuju" },
                        { value: 4, text: "Sangat Setuju" }
                    ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "44",
                    title: "Wirausaha adalah profesi bergengsi.",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sangat Tidak Setuju" },
                        { value: 2, text: "Tidak Setuju" },
                        { value: 3, text: "Setuju" },
                        { value: 4, text: "Sangat Setuju" }
                    ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "45",
                    title: "Saya merasa bahwa banyak peluang menjadi wirausaha.",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sangat Tidak Setuju" },
                        { value: 2, text: "Tidak Setuju" },
                        { value: 3, text: "Setuju" },
                        { value: 4, text: "Sangat Setuju" }
                    ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "46",
                    title: "Saya gigih berinovasi.",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sangat Tidak Setuju" },
                        { value: 2, text: "Tidak Setuju" },
                        { value: 3, text: "Setuju" },
                        { value: 4, text: "Sangat Setuju" }
                    ],
                    isRequired: true
                }
            ]
        }
    
    
        
    ]
};

export const surveyJson2 = {
    pages: [
        {
            elements: [
                {
                    name: "sector",
                    title: "Sektor Usaha",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Mikro (Aset s/d Rp. 50 jt & omzet penjualan tahunan s/d Rp. 300 jt)" },
                        { value: 2, text: "Kecil (Aset Rp. 50 jt - Rp. 500 jt & omzet penjualan tahunan s/d Rp. 300 jt - Rp. 2,5 Miliar)" },
                        { value: 3, text: "Menengah (Aset Rp. 500 jt - Rp. 10 Miliar & omzet penjualan tahunan s/d Rp. 2,5 Miliar - Rp. 50 Miliar)" },
                        { value: 4, text: "Besar (Aset > Rp. 10 Miliar & omzet penjualan tahunan > Rp. 50 Miliar)" }
                    ],
                    isRequired: true
                },
                {
                    name: "jenis",
                    title: "Jenis Usaha",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Usaha Pertanian (Agriculture)" },
                        { value: 2, text: "Usaha Pertambangan (Mining)" },
                        { value: 3, text: "Usaha Pabrikasi (Manufacturing)" },
                        { value: 4, text: "Usaha Konstruksi (Construction)" },
                        { value: 5, text: "Usaha Perdagangan (Trade)" },
                        { value: 6, text: "Usaha Jasa Keuangan (Financial Service)" },
                        { value: 7, text: "Usaha Jasa Perorangan (Personal Service)" },
                        { value: 8, text: "Bidang Jasa-jasa Umum (Public Service)" },
                        { value: 9, text: "Bidang Jasa Wisata (Tourism)" },
                        { value: 10, text: "Usaha Mikro" },
                        { value: 11, text: "Lainnya" }
                    ],
                    isRequired: true
                },
                {
                    name: "status",
                    title: "Kegiatan Status Usaha",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sedang memulai usaha" },
                        { value: 2, text: "Usahanya telah berjalan" },
                        { value: 3, text: "Usahanya telah berjalan dan sedang merintis hal baru/pengembangan usaha" }
                    ],
                    isRequired: true
                },
                {
                    name: "kelamin",
                    title: "Gender",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Male" },
                        { value: 2, text: "Female" }
                    ],
                    isRequired: true
                },
                {
                    name: "usia",
                    title: "Usia",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "< 25 Tahun" },
                        { value: 2, text: "25-40 Tahun" },
                        { value: 3, text: "41-55 Tahun" },
                        { value: 4, text: ">55 Tahun" }
                    ],
                    isRequired: true
                },
                {
                    name: "pendidikan",
                    title: "Pendidikan Terakhir",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "SD" },
                        { value: 2, text: "SMP" },
                        { value: 3, text: "SMA" },
                        { value: 4, text: "SMK" },
                        { value: 5, text: "S1" },
                        { value: 6, text: "S2" },
                        { value: 7, text: "S3" }
                    ],
                    isRequired: true
                },
                
                {
                    name: "pengalaman",
                    title: "Pengalaman menjadi wirausahawan/wati",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "< 4 Tahun" },
                        { value: 2, text: "4 - 10 Tahun" },
                        { value: 3, text: "11 - 15 Tahun" },
                        { value: 4, text: "> 15 Tahun" }
                    ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "1",
                    title: "ingkat ketersediaan dana pemerintah untuk pengembangan kewirausahaan",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sangat Tidak Setuju" },
                        { value: 2, text: "Tidak Setuju" },
                        { value: 3, text: "Sedikit Tidak Setuju" },
                        { value: 4, text: "Sedikit Setuju" },
                        { value: 5, text: "Setuju" },
                        { value: 6, text: "Sangat Setuju" }
                    ],
                    isRequired: true
                },
                {
                    name: "2",
                    title: "emudahan akses terhadap program bantuan dan hibah kewirausahaan oleh pemerintah",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sangat Tidak Setuju" },
                        { value: 2, text: "Tidak Setuju" },
                        { value: 3, text: "Sedikit Tidak Setuju" },
                        { value: 4, text: "Sedikit Setuju" },
                        { value: 5, text: "Setuju" },
                        { value: 6, text: "Sangat Setuju" }
                    ],
                    isRequired: true
                },
                {
                    name: "3",
                    title: "ingkat transparansi pemerintah dalam proses regulasi praktik kewirausahaan.",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sangat Tidak Setuju" },
                        { value: 2, text: "Tidak Setuju" },
                        { value: 3, text: "Sedikit Tidak Setuju" },
                        { value: 4, text: "Sedikit Setuju" },
                        { value: 5, text: "Setuju" },
                        { value: 6, text: "Sangat Setuju" }
                    ],
                    isRequired: true
                },
                {
                    name: "4",
                    title: "epastian hukum terkait dengan kebijakan pemerintah yang berdampak pada praktik kewirausahaan.",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sangat Tidak Setuju" },
                        { value: 2, text: "Tidak Setuju" },
                        { value: 3, text: "Sedikit Tidak Setuju" },
                        { value: 4, text: "Sedikit Setuju" },
                        { value: 5, text: "Setuju" },
                        { value: 6, text: "Sangat Setuju" }
                    ],
                    isRequired: true
                },
                {
                    name: "5",
                    title: "ingkat dukungan pemerintah terhadap inovasi dan riset di sektor kewirausahaan",
                    type: "radiogroup",
                    choices: [
                        { value: 1, text: "Sangat Tidak Setuju" },
                        { value: 2, text: "Tidak Setuju" },
                        { value: 3, text: "Sedikit Tidak Setuju" },
                        { value: 4, text: "Sedikit Setuju" },
                        { value: 5, text: "Setuju" },
                        { value: 6, text: "Sangat Setuju" }
                    ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                
                {
                    name: "6",
                    title: "Akses terhadap jaringan mentor dan ahli kewirausahaan",
                    type: "radiogroup",
                    choices: [
                            { value: 1, text: "Sangat Tidak Setuju" },
                            { value: 2, text: "Tidak Setuju" },
                            { value: 3, text: "Sedikit Tidak Setuju" },
                            { value: 4, text: "Sedikit Setuju" },
                            { value: 5, text: "Setuju" },
                            { value: 6, text: "Sangat Setuju" }
                        ],
                    isRequired: true
                },
                {
                    name: "7",
                    title: "Partisipasi dalam acara dan konferensi kewirausahaan",
                    type: "radiogroup",
                    choices: [
                            { value: 1, text: "Sangat Tidak Setuju" },
                            { value: 2, text: "Tidak Setuju" },
                            { value: 3, text: "Sedikit Tidak Setuju" },
                            { value: 4, text: "Sedikit Setuju" },
                            { value: 5, text: "Setuju" },
                            { value: 6, text: "Sangat Setuju" }
                        ],
                    isRequired: true
                },
                {
                    name: "8",
                    title: "Ketersediaan platform online untuk berbagi pengetahuan dan pengalaman.",
                    type: "radiogroup",
                    choices: [
                            { value: 1, text: "Sangat Tidak Setuju" },
                            { value: 2, text: "Tidak Setuju" },
                            { value: 3, text: "Sedikit Tidak Setuju" },
                            { value: 4, text: "Sedikit Setuju" },
                            { value: 5, text: "Setuju" },
                            { value: 6, text: "Sangat Setuju" }
                        ],
                    isRequired: true
                },
                {
                    name: "9",
                    title: "olaborasi dengan lembaga pendidikan dan pusat riset terkait kewirausahaan.",
                    type: "radiogroup",
                    choices: [
                            { value: 1, text: "Sangat Tidak Setuju" },
                            { value: 2, text: "Tidak Setuju" },
                            { value: 3, text: "Sedikit Tidak Setuju" },
                            { value: 4, text: "Sedikit Setuju" },
                            { value: 5, text: "Setuju" },
                            { value: 6, text: "Sangat Setuju" }
                        ],
                    isRequired: true
                },
                {
                    name: "10",
                    title: "Keterlibatan dalam asosiasi bisnis dan kemitraan industri.",
                    type: "radiogroup",
                    choices: [
                            { value: 1, text: "Sangat Tidak Setuju" },
                            { value: 2, text: "Tidak Setuju" },
                            { value: 3, text: "Sedikit Tidak Setuju" },
                            { value: 4, text: "Sedikit Setuju" },
                            { value: 5, text: "Setuju" },
                            { value: 6, text: "Sangat Setuju" }
                        ],
                    isRequired: true
                }
            ]
        },
        {  
            elements: [
                {
                    name: "11",
                    title: "Kemudahan memperoleh modal awal untuk memulai bisnis",
                    type: "radiogroup",
                    choices: [
                            { value: 1, text: "Sangat Tidak Setuju" },
                            { value: 2, text: "Tidak Setuju" },
                            { value: 3, text: "Sedikit Tidak Setuju" },
                            { value: 4, text: "Sedikit Setuju" },
                            { value: 5, text: "Setuju" },
                            { value: 6, text: "Sangat Setuju" }
                        ],
                    isRequired: true
                },
                {
                    name: "12",
                    title: "Akses terhadap fasilitas produksi dan distribusi.",
                    type: "radiogroup",
                    choices: [
                            { value: 1, text: "Sangat Tidak Setuju" },
                            { value: 2, text: "Tidak Setuju" },
                            { value: 3, text: "Sedikit Tidak Setuju" },
                            { value: 4, text: "Sedikit Setuju" },
                            { value: 5, text: "Setuju" },
                            { value: 6, text: "Sangat Setuju" }
                        ],
                    isRequired: true
                },
                {
                    name: "13",
                    title: "Ketersediaan sumber daya manusia yang berpotensi mendukung praktik kewirausahan",
                    type: "radiogroup",
                    choices: [
                                { value: 1, text: "Sangat Tidak Setuju" },
                                { value: 2, text: "Tidak Setuju" },
                                { value: 3, text: "Sedikit Tidak Setuju" },
                                { value: 4, text: "Sedikit Setuju" },
                                { value: 5, text: "Setuju" },
                                { value: 6, text: "Sangat Setuju" }
                            ],
                    isRequired: true
                },
                {
                    name: "14",
                    title: "Akses terhadap infrastruktur teknologi informasi dan komunikasi",
                    type: "radiogroup",
                    choices: [
                                { value: 1, text: "Sangat Tidak Setuju" },
                                { value: 2, text: "Tidak Setuju" },
                                { value: 3, text: "Sedikit Tidak Setuju" },
                                { value: 4, text: "Sedikit Setuju" },
                                { value: 5, text: "Setuju" },
                                { value: 6, text: "Sangat Setuju" }
                            ],
                    isRequired: true
                },
                {
                    name: "15",
                    title: "Kemudahan dalam memperoleh sumber daya alam dan energi.",
                    type: "radiogroup",
                    choices: [
                                { value: 1, text: "Sangat Tidak Setuju" },
                                { value: 2, text: "Tidak Setuju" },
                                { value: 3, text: "Sedikit Tidak Setuju" },
                                { value: 4, text: "Sedikit Setuju" },
                                { value: 5, text: "Setuju" },
                                { value: 6, text: "Sangat Setuju" }
                            ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "16",
                    title: "Budaya inovasi dan eksperimen yang tinggi.",
                    type: "radiogroup",
                    choices: [
                                { value: 1, text: "Sangat Tidak Setuju" },
                                { value: 2, text: "Tidak Setuju" },
                                { value: 3, text: "Sedikit Tidak Setuju" },
                                { value: 4, text: "Sedikit Setuju" },
                                { value: 5, text: "Setuju" },
                                { value: 6, text: "Sangat Setuju" }
                            ],
                    isRequired: true
                },
                {
                    name: "17",
                    title: "Keahlian teknis dan keunggulan dalam produk atau layanan.",
                    type: "radiogroup",
                    choices: [
                                { value: 1, text: "Sangat Tidak Setuju" },
                                { value: 2, text: "Tidak Setuju" },
                                { value: 3, text: "Sedikit Tidak Setuju" },
                                { value: 4, text: "Sedikit Setuju" },
                                { value: 5, text: "Setuju" },
                                { value: 6, text: "Sangat Setuju" }
                            ],
                    isRequired: true
                },
                {
                    name: "18",
                    title: "Ketersediaan fasilitas riset dan pengembangan kewirausahaan.",
                    type: "radiogroup",
                    choices: [
                                { value: 1, text: "Sangat Tidak Setuju" },
                                { value: 2, text: "Tidak Setuju" },
                                { value: 3, text: "Sedikit Tidak Setuju" },
                                { value: 4, text: "Sedikit Setuju" },
                                { value: 5, text: "Setuju" },
                                { value: 6, text: "Sangat Setuju" }
                            ],
                    isRequired: true
                },
                {
                    name: "19",
                    title: "Keterlibatan dalam kemitraan riset dengan lembaga akademis atau industri lainnya.",
                    type: "radiogroup",
                    choices: [
                                { value: 1, text: "Sangat Tidak Setuju" },
                                { value: 2, text: "Tidak Setuju" },
                                { value: 3, text: "Sedikit Tidak Setuju" },
                                { value: 4, text: "Sedikit Setuju" },
                                { value: 5, text: "Setuju" },
                                { value: 6, text: "Sangat Setuju" }
                            ],
                    isRequired: true
                },
                {
                    name: "20",
                    title: "Ketersediaan akses terhadap pasar uji coba dan pengujian produk kewirausahaan.",
                    type: "radiogroup",
                    choices: [
                                { value: 1, text: "Sangat Tidak Setuju" },
                                { value: 2, text: "Tidak Setuju" },
                                { value: 3, text: "Sedikit Tidak Setuju" },
                                { value: 4, text: "Sedikit Setuju" },
                                { value: 5, text: "Setuju" },
                                { value: 6, text: "Sangat Setuju" }
                            ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                {
                    name: "21",
                    title: "Kemauan untuk mengambil risiko dan mencoba hal baru.",
                    type: "radiogroup",
                    choices: [
                                { value: 1, text: "Sangat Tidak Setuju" },
                                { value: 2, text: "Tidak Setuju" },
                                { value: 3, text: "Sedikit Tidak Setuju" },
                                { value: 4, text: "Sedikit Setuju" },
                                { value: 5, text: "Setuju" },
                                { value: 6, text: "Sangat Setuju" }
                            ],
                    isRequired: true
                },
                {
                    name: "22",
                    title: "Kemampuan dalam merumuskan strategi bisnis",
                    type: "radiogroup",
                    choices: [
                                { value: 1, text: "Sangat Tidak Setuju" },
                                { value: 2, text: "Tidak Setuju" },
                                { value: 3, text: "Sedikit Tidak Setuju" },
                                { value: 4, text: "Sedikit Setuju" },
                                { value: 5, text: "Setuju" },
                                { value: 6, text: "Sangat Setuju" }
                            ],
                    isRequired: true
                },
                {
                    name: "23",
                    title: "Kreativitas dalam memecahkan masalah",
                    type: "radiogroup",
                    choices: [
                                { value: 1, text: "Sangat Tidak Setuju" },
                                { value: 2, text: "Tidak Setuju" },
                                { value: 3, text: "Sedikit Tidak Setuju" },
                                { value: 4, text: "Sedikit Setuju" },
                                { value: 5, text: "Setuju" },
                                { value: 6, text: "Sangat Setuju" }
                            ],
                    isRequired: true
                },
                {
                    name: "24",
                    title: "Kemampuan untuk melihat peluang dalam tantangan.",
                    type: "radiogroup",
                    choices: [
                                { value: 1, text: "Sangat Tidak Setuju" },
                                { value: 2, text: "Tidak Setuju" },
                                { value: 3, text: "Sedikit Tidak Setuju" },
                                { value: 4, text: "Sedikit Setuju" },
                                { value: 5, text: "Setuju" },
                                { value: 6, text: "Sangat Setuju" }
                            ],
                    isRequired: true
                },
                {
                    name: "25",
                    title: "Keinginan untuk belajar dan berkembang.",
                    type: "radiogroup",
                    choices: [
                                { value: 1, text: "Sangat Tidak Setuju" },
                                { value: 2, text: "Tidak Setuju" },
                                { value: 3, text: "Sedikit Tidak Setuju" },
                                { value: 4, text: "Sedikit Setuju" },
                                { value: 5, text: "Setuju" },
                                { value: 6, text: "Sangat Setuju" }
                            ],
                    isRequired: true
                }
            ]
        },
        {
            elements: [
                
                {
                    name: "26",
                    title: "Sikap optimis dan positif terhadap tantangan.",
                    type: "radiogroup",
                    choices: [
                                { value: 1, text: "Sangat Tidak Setuju" },
                                { value: 2, text: "Tidak Setuju" },
                                { value: 3, text: "Sedikit Tidak Setuju" },
                                { value: 4, text: "Sedikit Setuju" },
                                { value: 5, text: "Setuju" },
                                { value: 6, text: "Sangat Setuju" }
                            ],
                    isRequired: true
                },
                {
                    name: "27",
                    title: "Ketekunan dan konsistensi dalam mencapai tujuan bisnis.",
                    type: "radiogroup",
                    choices: [
                                { value: 1, text: "Sangat Tidak Setuju" },
                                { value: 2, text: "Tidak Setuju" },
                                { value: 3, text: "Sedikit Tidak Setuju" },
                                { value: 4, text: "Sedikit Setuju" },
                                { value: 5, text: "Setuju" },
                                { value: 6, text: "Sangat Setuju" }
                            ],
                    isRequired: true
                },
                {
                    name: "28",
                    title: "Proaktif dalam mencari peluang dan mengambil inisiatif.",
                    type: "radiogroup",
                    choices: [
                                { value: 1, text: "Sangat Tidak Setuju" },
                                { value: 2, text: "Tidak Setuju" },
                                { value: 3, text: "Sedikit Tidak Setuju" },
                                { value: 4, text: "Sedikit Setuju" },
                                { value: 5, text: "Setuju" },
                                { value: 6, text: "Sangat Setuju" }
                            ],
                    isRequired: true
                },
                {
                    name: "29",
                    title: "Etos kerja keras dan komitmen terhadap keberhasilan.",
                    type: "radiogroup",
                    choices: [
                                { value: 1, text: "Sangat Tidak Setuju" },
                                { value: 2, text: "Tidak Setuju" },
                                { value: 3, text: "Sedikit Tidak Setuju" },
                                { value: 4, text: "Sedikit Setuju" },
                                { value: 5, text: "Setuju" },
                                { value: 6, text: "Sangat Setuju" }
                            ],
                    isRequired: true
                },
                {
                    name: "30",
                    title: "Kemampuan untuk mengatasi hambatan dan rintangan dengan kepala dingin.",
                    type: "radiogroup",
                    choices: [
                                { value: 1, text: "Sangat Tidak Setuju" },
                                { value: 2, text: "Tidak Setuju" },
                                { value: 3, text: "Sedikit Tidak Setuju" },
                                { value: 4, text: "Sedikit Setuju" },
                                { value: 5, text: "Setuju" },
                                { value: 6, text: "Sangat Setuju" }
                            ],
                    isRequired: true
                },
            ]
        },
        {
            elements: [
                {
                    name: "31",
                    title: "Keterampilan adaptasi terhadap perubahan pasar dan lingkungan bisnis.",
                    type: "radiogroup",
                    choices: [
                                { value: 1, text: "Sangat Tidak Setuju" },
                                { value: 2, text: "Tidak Setuju" },
                                { value: 3, text: "Sedikit Tidak Setuju" },
                                { value: 4, text: "Sedikit Setuju" },
                                { value: 5, text: "Setuju" },
                                { value: 6, text: "Sangat Setuju" }
                            ],
                    isRequired: true
                },
                {
                    name: "32",
                    title: "Ketahanan dalam menghadapi kegagalan dan krisis.",
                    type: "radiogroup",
                    choices: [
                                { value: 1, text: "Sangat Tidak Setuju" },
                                { value: 2, text: "Tidak Setuju" },
                                { value: 3, text: "Sedikit Tidak Setuju" },
                                { value: 4, text: "Sedikit Setuju" },
                                { value: 5, text: "Setuju" },
                                { value: 6, text: "Sangat Setuju" }
                            ],
                    isRequired: true
                },
                {
                    name: "33",
                    title: "Kemampuan dalam menyesuaikan rencana bisnis dengan perubahan kebutuhan pasar",
                    type: "radiogroup",
                    choices: [
                                { value: 1, text: "Sangat Tidak Setuju" },
                                { value: 2, text: "Tidak Setuju" },
                                { value: 3, text: "Sedikit Tidak Setuju" },
                                { value: 4, text: "Sedikit Setuju" },
                                { value: 5, text: "Setuju" },
                                { value: 6, text: "Sangat Setuju" }
                            ],
                    isRequired: true
                },
                {
                    name: "34",
                    title: "Keterampilan dalam mengelola sumber daya dan risiko kewirausahaan",
                    type: "radiogroup",
                    choices: [
                                { value: 1, text: "Sangat Tidak Setuju" },
                                { value: 2, text: "Tidak Setuju" },
                                { value: 3, text: "Sedikit Tidak Setuju" },
                                { value: 4, text: "Sedikit Setuju" },
                                { value: 5, text: "Setuju" },
                                { value: 6, text: "Sangat Setuju" }
                            ],
                    "isRequired": true
                },
                {
                    name: "35",
                    title: "Keterampilan komunikasi dan kepemimpinan kewirausahaan.",
                    type: "radiogroup",
                    choices: [
                                { value: 1, text: "Sangat Tidak Setuju" },
                                { value: 2, text: "Tidak Setuju" },
                                { value: 3, text: "Sedikit Tidak Setuju" },
                                { value: 4, text: "Sedikit Setuju" },
                                { value: 5, text: "Setuju" },
                                { value: 6, text: "Sangat Setuju" }
                            ],
                    "isRequired": true
                }
            ]
        },
        {
            elements: [
                {
                    name: "36",
                    title: "Identifikasi dan evaluasi peluang pasar yang potensial.",
                    type: "radiogroup",
                    choices: [
                                { value: 1, text: "Sangat Tidak Setuju" },
                                { value: 2, text: "Tidak Setuju" },
                                { value: 3, text: "Sedikit Tidak Setuju" },
                                { value: 4, text: "Sedikit Setuju" },
                                { value: 5, text: "Setuju" },
                                { value: 6, text: "Sangat Setuju" }
                            ],
                    "isRequired": true
                },
                {
                    name: "37",
                    title: "Responsif terhadap perubahan tren dan permintaan pasar.",
                    type: "radiogroup",
                    choices: [
                                { value: 1, text: "Sangat Tidak Setuju" },
                                { value: 2, text: "Tidak Setuju" },
                                { value: 3, text: "Sedikit Tidak Setuju" },
                                { value: 4, text: "Sedikit Setuju" },
                                { value: 5, text: "Setuju" },
                                { value: 6, text: "Sangat Setuju" }
                            ],
                    "isRequired": true
                },
                {
                    name: "38",
                    title: "Ketersediaan strategi untuk memanfaatkan peluang yang ada.",
                    type: "radiogroup",
                    choices: [
                                { value: 1, text: "Sangat Tidak Setuju" },
                                { value: 2, text: "Tidak Setuju" },
                                { value: 3, text: "Sedikit Tidak Setuju" },
                                { value: 4, text: "Sedikit Setuju" },
                                { value: 5, text: "Setuju" },
                                { value: 6, text: "Sangat Setuju" }
                            ],
                    "isRequired": true
                },
                {
                    name: "39",
                    title: "Keterlibatan dalam pengembangan produk dan layanan yang inovatif.",
                    type: "radiogroup",
                    choices: [
                                { value: 1, text: "Sangat Tidak Setuju" },
                                { value: 2, text: "Tidak Setuju" },
                                { value: 3, text: "Sedikit Tidak Setuju" },
                                { value: 4, text: "Sedikit Setuju" },
                                { value: 5, text: "Setuju" },
                                { value: 6, text: "Sangat Setuju" }
                            ],
                    "isRequired": true
                },
                {
                    name: "40",
                    title: "Penyesuaian cepat terhadap perubahan lingkungan bisnis.",
                    type: "radiogroup",
                    choices: [
                                { value: 1, text: "Sangat Tidak Setuju" },
                                { value: 2, text: "Tidak Setuju" },
                                { value: 3, text: "Sedikit Tidak Setuju" },
                                { value: 4, text: "Sedikit Setuju" },
                                { value: 5, text: "Setuju" },
                                { value: 6, text: "Sangat Setuju" }
                            ],
                    "isRequired": true
                }
            ]
        },
        {
            elements:[
                
                {
                    name: "41",
                    title: " Pengambilan keputusan yang cepat dan tepat dalam situasi yang tidak pasti.",
                    type: "radiogroup",
                    choices: [
                                { value: 1, text: "Sangat Tidak Setuju" },
                                { value: 2, text: "Tidak Setuju" },
                                { value: 3, text: "Sedikit Tidak Setuju" },
                                { value: 4, text: "Sedikit Setuju" },
                                { value: 5, text: "Setuju" },
                                { value: 6, text: "Sangat Setuju" }
                            ],
                    "isRequired": true
                },
                {
                    name: "42",
                    title: "Fleksibilitas dan adaptabilitas dalam menjalankan bisnis",
                    type: "radiogroup",
                    choices: [
                                { value: 1, text: "Sangat Tidak Setuju" },
                                { value: 2, text: "Tidak Setuju" },
                                { value: 3, text: "Sedikit Tidak Setuju" },
                                { value: 4, text: "Sedikit Setuju" },
                                { value: 5, text: "Setuju" },
                                { value: 6, text: "Sangat Setuju" }
                            ],
                    "isRequired": true
                },
                {
                    name: "43",
                    title: "Pengelolaan waktu dan sumber daya yang efisien",
                    type: "radiogroup",
                    choices: [
                                { value: 1, text: "Sangat Tidak Setuju" },
                                { value: 2, text: "Tidak Setuju" },
                                { value: 3, text: "Sedikit Tidak Setuju" },
                                { value: 4, text: "Sedikit Setuju" },
                                { value: 5, text: "Setuju" },
                                { value: 6, text: "Sangat Setuju" }
                            ],
                    "isRequired": true
                },
                {
                    name: "44",
                    title: "Keterlibatan dalam aktivitas riset pasar dan analisis kompetitif.",
                    type: "radiogroup",
                    choices: [
                                { value: 1, text: "Sangat Tidak Setuju" },
                                { value: 2, text: "Tidak Setuju" },
                                { value: 3, text: "Sedikit Tidak Setuju" },
                                { value: 4, text: "Sedikit Setuju" },
                                { value: 5, text: "Setuju" },
                                { value: 6, text: "Sangat Setuju" }
                            ],
                    "isRequired": true
                },
                {
                    name: "45",
                    title: "Kolaborasi tim yang efektif dan komunikasi yang terbuka",
                    type: "radiogroup",
                    choices: [
                                { value: 1, text: "Sangat Tidak Setuju" },
                                { value: 2, text: "Tidak Setuju" },
                                { value: 3, text: "Sedikit Tidak Setuju" },
                                { value: 4, text: "Sedikit Setuju" },
                                { value: 5, text: "Setuju" },
                                { value: 6, text: "Sangat Setuju" }
                            ],
                    "isRequired": true
                }
            ]
        },
        {
            elements: [
                {
                    name: "46",
                    title: "Partisipasi dalam Kegiatan Komunitas Kewirausahaan.",
                    type: "radiogroup",
                    choices: [
                                { value: 1, text: "Sangat Tidak Setuju" },
                                { value: 2, text: "Tidak Setuju" },
                                { value: 3, text: "Sedikit Tidak Setuju" },
                                { value: 4, text: "Sedikit Setuju" },
                                { value: 5, text: "Setuju" },
                                { value: 6, text: "Sangat Setuju" }
                            ],
                    "isRequired": true
                },
                {
                    name: "47",
                    title: "Pengembangan Keterampilan dan Pengetahuan Kewirausahaan.",
                    type: "radiogroup",
                    choices: [
                                { value: 1, text: "Sangat Tidak Setuju" },
                                { value: 2, text: "Tidak Setuju" },
                                { value: 3, text: "Sedikit Tidak Setuju" },
                                { value: 4, text: "Sedikit Setuju" },
                                { value: 5, text: "Setuju" },
                                { value: 6, text: "Sangat Setuju" }
                            ],
                    "isRequired": true
                },
                {
                    name: "48",
                    title: "Komitmen terhadap Keberlanjutan Lingkungan dan Sosial.",
                    type: "radiogroup",
                    choices: [
                                { value: 1, text: "Sangat Tidak Setuju" },
                                { value: 2, text: "Tidak Setuju" },
                                { value: 3, text: "Sedikit Tidak Setuju" },
                                { value: 4, text: "Sedikit Setuju" },
                                { value: 5, text: "Setuju" },
                                { value: 6, text: "Sangat Setuju" }
                            ],
                    "isRequired": true
                },
                {
                    name: "49",
                    title: "Ekspansi Usaha dan Pertumbuhan Bisnis.",
                    type: "radiogroup",
                    choices: [
                                { value: 1, text: "Sangat Tidak Setuju" },
                                { value: 2, text: "Tidak Setuju" },
                                { value: 3, text: "Sedikit Tidak Setuju" },
                                { value: 4, text: "Sedikit Setuju" },
                                { value: 5, text: "Setuju" },
                                { value: 6, text: "Sangat Setuju" }
                            ],
                    "isRequired": true
                },
                {
                    name: "50",
                    title: "Kesiapan untuk Menghadapi Tantangan dan Perubahan. ",
                    type: "radiogroup",
                    choices: [
                                { value: 1, text: "Sangat Tidak Setuju" },
                                { value: 2, text: "Tidak Setuju" },
                                { value: 3, text: "Sedikit Tidak Setuju" },
                                { value: 4, text: "Sedikit Setuju" },
                                { value: 5, text: "Setuju" },
                                { value: 6, text: "Sangat Setuju" }
                            ],
                    "isRequired": true
                },
            ]
        },
        {
            elements: [
                {
                    name: "51",
                    title: "Nilai-nilai budaya yang mendorong kewirausahaan",
                    type: "radiogroup",
                    choices: [
                                { value: 1, text: "Sangat Tidak Setuju" },
                                { value: 2, text: "Tidak Setuju" },
                                { value: 3, text: "Sedikit Tidak Setuju" },
                                { value: 4, text: "Sedikit Setuju" },
                                { value: 5, text: "Setuju" },
                                { value: 6, text: "Sangat Setuju" }
                            ],
                    "isRequired": true
                },
                {
                    name: "52",
                    title: " Faktor sosial dan ekonomi yang memengaruhi keputusan berwirausaha.",
                    type: "radiogroup",
                    choices: [
                                { value: 1, text: "Sangat Tidak Setuju" },
                                { value: 2, text: "Tidak Setuju" },
                                { value: 3, text: "Sedikit Tidak Setuju" },
                                { value: 4, text: "Sedikit Setuju" },
                                { value: 5, text: "Setuju" },
                                { value: 6, text: "Sangat Setuju" }
                            ],
                    "isRequired": true
                },
                {
                    name: "53",
                    title: "Persepsi masyarakat terhadap prestise dan keberhasilan sebagai wirausaha",
                    type: "radiogroup",
                    choices: [
                                { value: 1, text: "Sangat Tidak Setuju" },
                                { value: 2, text: "Tidak Setuju" },
                                { value: 3, text: "Sedikit Tidak Setuju" },
                                { value: 4, text: "Sedikit Setuju" },
                                { value: 5, text: "Setuju" },
                                { value: 6, text: "Sangat Setuju" }
                            ],
                    "isRequired": true
                },
                {
                    name: "54",
                    title: "Dukungan dari keluarga dan lingkungan sekitar.",
                    type: "radiogroup",
                    choices: [
                                { value: 1, text: "Sangat Tidak Setuju" },
                                { value: 2, text: "Tidak Setuju" },
                                { value: 3, text: "Sedikit Tidak Setuju" },
                                { value: 4, text: "Sedikit Setuju" },
                                { value: 5, text: "Setuju" },
                                { value: 6, text: "Sangat Setuju" }
                            ],
                    "isRequired": true
                },
                {
                    name: "55",
                    title: "Penghargaan dan pengakuan atas prestasi bisnis lokal.",
                    type: "radiogroup",
                    choices: [
                                { value: 1, text: "Sangat Tidak Setuju" },
                                { value: 2, text: "Tidak Setuju" },
                                { value: 3, text: "Sedikit Tidak Setuju" },
                                { value: 4, text: "Sedikit Setuju" },
                                { value: 5, text: "Setuju" },
                                { value: 6, text: "Sangat Setuju" }
                            ],
                    "isRequired": true
                },
            ]
        }
    ]
}
