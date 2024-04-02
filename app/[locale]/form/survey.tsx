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
                },
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
                },
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
                },
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
            },
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
            },
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
            },
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
            },
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
            },
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
            },
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
            },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
    "elements": [
        {
            "name": "34",
            "title": "Peluang adalah kesempatan emas.",
            "type": "radiogroup",
            "choices": [
                { "value": 1, "text": "Sangat Tidak Setuju" },
                { "value": 2, "text": "Tidak Setuju" },
                { "value": 3, "text": "Setuju" },
                { "value": 4, "text": "Sangat Setuju" }
            ],
            "isRequired": true
        },
        {
            "name": "35",
            "title": "Saya terampil mendirikan bisnis baru.",
            "type": "radiogroup",
            "choices": [
                { "value": 1, "text": "Sangat Tidak Setuju" },
                { "value": 2, "text": "Tidak Setuju" },
                { "value": 3, "text": "Setuju" },
                { "value": 4, "text": "Sangat Setuju" }
            ],
            "isRequired": true
        },
        {
            "name": "36",
            "title": "Saya berani mengambil risiko.",
            "type": "radiogroup",
            "choices": [
                { "value": 1, "text": "Sangat Tidak Setuju" },
                { "value": 2, "text": "Tidak Setuju" },
                { "value": 3, "text": "Setuju" },
                { "value": 4, "text": "Sangat Setuju" }
            ],
            "isRequired": true
        },
        {
            "name": "37",
            "title": "Saya memiliki jejaring yang luas dari berbagai bidang.",
            "type": "radiogroup",
            "choices": [
                { "value": 1, "text": "Sangat Tidak Setuju" },
                { "value": 2, "text": "Tidak Setuju" },
                { "value": 3, "text": "Setuju" },
                { "value": 4, "text": "Sangat Setuju" }
            ],
            "isRequired": true
        },
        {
            "name": "38",
            "title": "Saya hidup di lingkungan komunitas berwirausaha.",
            "type": "radiogroup",
            "choices": [
                { "value": 1, "text": "Sangat Tidak Setuju" },
                { "value": 2, "text": "Tidak Setuju" },
                { "value": 3, "text": "Setuju" },
                { "value": 4, "text": "Sangat Setuju" }
            ],
            "isRequired": true
        },
        {
            "name": "39",
            "title": "Saya mampu menangkap kebutuhan di masa depan.",
            "type": "radiogroup",
            "choices": [
                { "value": 1, "text": "Sangat Tidak Setuju" },
                { "value": 2, "text": "Tidak Setuju" },
                { "value": 3, "text": "Setuju" },
                { "value": 4, "text": "Sangat Setuju" }
            ],
            "isRequired": true
        },
        {
            "name": "40",
            "title": "Saya mampu menyusun strategi yang baik bagi usaha saya.",
            "type": "radiogroup",
            "choices": [
                { "value": 1, "text": "Sangat Tidak Setuju" },
                { "value": 2, "text": "Tidak Setuju" },
                { "value": 3, "text": "Setuju" },
                { "value": 4, "text": "Sangat Setuju" }
            ],
            "isRequired": true
        },
        {
            "name": "41",
            "title": "Saya terampil dalam memimpin tim.",
            "type": "radiogroup",
            "choices": [
                { "value": 1, "text": "Sangat Tidak Setuju" },
                { "value": 2, "text": "Tidak Setuju" },
                { "value": 3, "text": "Setuju" },
                { "value": 4, "text": "Sangat Setuju" }
            ],
            "isRequired": true
        },
        {
            "name": "42",
            "title": "Saya terampil memanfaatkan teknologi.",
            "type": "radiogroup",
            "choices": [
                { "value": 1, "text": "Sangat Tidak Setuju" },
                { "value": 2, "text": "Tidak Setuju" },
                { "value": 3, "text": "Setuju" },
                { "value": 4, "text": "Sangat Setuju" }
            ],
            "isRequired": true
        }
    ]
},
{
    "elements": [
        {
            "name": "43",
            "title": "Menjadi wirausaha adalah pilihan saya.",
            "type": "radiogroup",
            "choices": [
                { "value": 1, "text": "Sangat Tidak Setuju" },
                { "value": 2, "text": "Tidak Setuju" },
                { "value": 3, "text": "Setuju" },
                { "value": 4, "text": "Sangat Setuju" }
            ],
            "isRequired": true
        },
        {
            "name": "44",
            "title": "Wirausaha adalah profesi bergengsi.",
            "type": "radiogroup",
            "choices": [
                { "value": 1, "text": "Sangat Tidak Setuju" },
                { "value": 2, "text": "Tidak Setuju" },
                { "value": 3, "text": "Setuju" },
                { "value": 4, "text": "Sangat Setuju" }
            ],
            "isRequired": true
        },
        {
            "name": "45",
            "title": "Saya merasa bahwa banyak peluang menjadi wirausaha.",
            "type": "radiogroup",
            "choices": [
                { "value": 1, "text": "Sangat Tidak Setuju" },
                { "value": 2, "text": "Tidak Setuju" },
                { "value": 3, "text": "Setuju" },
                { "value": 4, "text": "Sangat Setuju" }
            ],
            "isRequired": true
        },
        {
            "name": "46",
            "title": "Saya gigih berinovasi.",
            "type": "radiogroup",
            "choices": [
                { "value": 1, "text": "Sangat Tidak Setuju" },
                { "value": 2, "text": "Tidak Setuju" },
                { "value": 3, "text": "Setuju" },
                { "value": 4, "text": "Sangat Setuju" }
            ],
            "isRequired": true
        }
    ]
}



    
        
    
    ]
}
