import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  StyleSheet,
  Button,
  ScrollView
} from 'react-native'

import { SharedElement } from 'react-navigation-shared-element'

class HomeScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      articles: [
        {
          id: 1,
          cover: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1d23942d-5347-4e03-ba6c-7170dc6ed7d0/d8jib5f-8b91c26b-2821-467b-a0dc-3fb4e308294a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFkMjM5NDJkLTUzNDctNGUwMy1iYTZjLTcxNzBkYzZlZDdkMFwvZDhqaWI1Zi04YjkxYzI2Yi0yODIxLTQ2N2ItYTBkYy0zZmI0ZTMwODI5NGEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.otY7FCus4vP8yAy8411vPIRq3t9jtqiAGMA62WE49-A',
          title: 'Kaori Chan',
          caption: 'Main Character from Shigatsu Wa Kimi No Uso',
          serial: 'Shigatsu Wa Kimi No Uso',
          dubber: 'Risa Taneda',
          description: `Kaori adalah teman sekelas Tsubaki. Memiliki sifat ceria dan bersemangat tinggi, Ia adalah seorang pemain biola yang menuai banyak kritik dari para juri panel karena dia membangkang akan aturan skor para juri dengan memainkan biolanya secara ekspresif dan sesuka hati, namun dengan alasan yang sama permainannya menjadi favorit oleh para penonton. Kaori bertemu Kousei saat dia meminta Tsubaki untuk dikenalkan kepada Watari. Kaori pada dasarnya ingin menyadarkan Kousei agar bermain kembali memainkan piano, Ia memulai perjuangannya dengan cara menjadikan Kousei sebagai pendamping pianonya di kompetisi biola yang Ia ikuti.`
        },
        {
          id: 2,
          cover: 'https://wallpapercave.com/wp/wp3613700.jpg',
          title: 'Asta',
          caption: 'Main Male Character from Black Clover series',
          serial: 'Black Clover',
          dubber: 'Gakuto Kajiwara',
          description: `Asta merupakan salah satu tokoh utama di dalam anime ini. Ia adalah anak yatim piatu yang ditinggalkan di depan gereja desa Hage bersama dengan Yuno. Sejak kecil, ia sangat akrab dengan Yuno dan menjadikannya rival karena keduanya memiliki impian untuk menjadi Wizard King. Sayangnya, Asta sama sekali tidak memiliki kekuatan magis di dalam dirinya. Seberapa keras usahanya untuk mencoba, ia tidak dapat menggunakan ilmu sihir sama sekali. Bahkan beberapa penyihir handal berkata bahwa mereka tidak dapat merasakan kekuatan sihir sedikitpun dari karakter bertubuh kecil ini. Meskipun demikian, Asta tetap tidak menyerah akan impiannya dan berlatih fisik sebagai pengganti ilmu sihir. Hingga suatu saat ia berhasil mendapatkan griomoire-nya walaupun ia tidak memiliki kekuatan magis dan hal ini membuat semua orang bingung. Sifat Asta yang ceria, hyper active, dan pantang menyerah ketika ujian masuk Magic Knight berhasil menggerakkan hati Yami sehingga ia diterima di squad Black Bull.`
        },
        {
          id: 3,
          cover: 'https://ggwp.id/media/wp-content/uploads/2019/12/kazuma.jpg',
          title: 'Lord Kazuma',
          caption: 'The best character from Konosubarashi',
          serial: 'Kono Subarashii',
          dubber: 'Jun Fukushima',
          description: `Protagonis utama pada serial ini. Seorang remaja Jepang berusia 16 tahun yang menjadi terobsesi dengan permainan setelah mengalami patah hati oleh teman masa kecilnya saat SMP. Dia dikirim ke dunia paralel setelah meninggal karena reaksi stres akut, memaksa Aqua untuk mengikutinya karena merasa jengkel dengan sikap dewi tersebut. Kazuma masuk dalam kelas Petualang, meskipun menjadi kelas terendah, memungkinkan dirinya untuk mempelajari berbagai keterampilan dari kelas lainnya, meskipun dengan biaya yang tinggi. Dengan kemampuannya, Kazuma mempelajari beberapa keterampilan dasar seperti mencuri, memanah, mendeteksi monster, dan sihir dasar.`
        },
        {
          id: 4,
          cover: 'https://i2.wp.com/www.artforia.com/wp-content/uploads/2018/08/Kimi-no-Na-Wa-artforia-anime-Jepang1.jpg?resize=1140%2C819&ssl=1',
          title: 'Taki & Mitshua',
          caption: 'Main character from anime Kimi no nawa',
          serial: 'Kimi No Nawa',
          dubber: 'Ryunosuke Kamiki',
          description: `Tokoh utama pria dari film ini, seorang siswa sekolah menengah atas yang tinggal di pusat kota Tokyo, tepatnya di Shinjuku. Dia tinggal bersama ayahnya di sebuah rumah di mana mereka dapat melihat Menara Tokyo secara langsung. Sehari-harinya dia berkumpul bersama teman-temannya dan bekerja paruh-waktu di sebuah restoran Italia bernama "Il Giardino Delle Parole".[c] Dia bertemperamen pendek, namun memiliki niat yang baik dan juga ramah. Dia tertarik dengan seni dan arsitektur.`
        }
      ]
    }
  }

  render() {

    const { navigation } = this.props

    return (
      <>
        <View style={{ flex: 1 }}>
          <FlatList
            data={this.state.articles}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, key }) => {
              return (
                <>
                  <TouchableOpacity onPress={() => navigation.push("Detail", {
                    item: {
                      id: item.id,
                      cover: item.cover,
                      title: item.title,
                      serial: item.serial,
                      dubber: item.dubber,
                      description: item.description
                    }
                  })}>
                    <View style={styles.card}>
                      <SharedElement id={`cover.${item.id}`}>
                        <Image source={{ uri: item.cover }} style={styles.image} />
                      </SharedElement>
                      <View style={styles.overlay}>
                        <Text style={styles.textTitle}>{item.title}</Text>
                        <Text style={styles.textCaption}>{item.caption}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </>
              )
            }}
          />
        </View>
      </>
    )
  }
}

const SCREEN_WIDTH = Dimensions.get('window').width

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: SCREEN_WIDTH * 0.5,
    marginVertical: 6,
    padding: 12
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    height: SCREEN_WIDTH / 2,
    borderRadius: 12,
    position: 'absolute',
    width: SCREEN_WIDTH * 0.95,
    left: 12,
    zIndex:1,
  },
  image: {
    width: SCREEN_WIDTH * 0.95,
    height: SCREEN_WIDTH / 2,
    top: -11, // edited
    borderRadius: 12,
    resizeMode: 'cover'
  },
  textTitle: {
    fontSize: 30,
    top: 120,
    left: 12,
    color: '#fff'
  },
  textCaption: {
    color: '#fff',
    top: 130,
    left: 12,
    fontSize: 16
  }
})

export default HomeScreen