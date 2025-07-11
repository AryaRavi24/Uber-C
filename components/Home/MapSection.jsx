import React, { useContext, useEffect, useState } from 'react'
import { DirectionsRenderer, GoogleMap, MarkerF, OverlayView, OverlayViewF, useJsApiLoader } from '@react-google-maps/api'
import { SourceContext } from '@/context/SourceContext'

const containerStyle = {
  width: '100%',
  height:'100%'
//   height: window.innerWidth*0.4,
}

function MapSection() {

  const [center, setCenter] = useState({
  lat: -3.745,
  lng: -38.523,
})
  const {source, setSource, destination, setDestination} = useContext(SourceContext);
  const [directionRoutePoint, setDirectionRoutePoint] = useState([]);

useEffect(()=>{
  if(source?.length!=[] && map){
    map.panTo(
      {
        lat:source.lat,
        lng:source.lng,
      }
    )
      setCenter({
        lat:source.lat,
        lng:source.lng,
      })
  }
  if(destination?.length!=[] && map){
      setCenter({
        lat:destination.lat,
        lng:destination.lng,
      })
  }

  if(source?.length !=[] && destination?.length !=[]){
    directionRoute();
  }

},[source,destination])

const directionRoute =()=>{
  const directionService =new google.maps.DirectionsService();
  directionService.route({
    origin:{lat:source.lat, lng:source.lng},
    destination:{lat:destination.lat, lng:destination.lng},
    travelMode:google.maps.TravelMode.DRIVING
  },(result,status)=>{
    if(status === google.maps.DirectionsStatus.OK){
      setDirectionRoutePoint(result);
    }else{
      console.error('Error');
    }
  })
}

  const [map, setMap] = useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center)
    map.fitBounds(bounds)

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return (
    <div className="w-full h-[60vw] md:h-[600px] lg:h-[600px]">
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{mapId:process.env.NEXT_PUBLIC_GOOGLE_MAP_ID}}
    >
      //For putting the marker on the pickup point
      { source?.lat && source?.lng ?(
        <MarkerF 
      position={{lat:source.lat, lng:source.lng}}
      icon={{
        url:"/source.png",
        scaledSize:{
          width :25,
          height:25
        }
      }}
      >
        //For marking the pickup point name of the place on map
        <OverlayViewF position={{lat:source.lat, lng:source.lng}} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
          <div className="p-2 bg-black">
            <p className="text-white text-[12px]">{source.label}</p>
          </div>
        </OverlayViewF>


      </MarkerF> ): null }

      { destination?.lat && destination?.lng ?(
        <MarkerF 
      position={{lat:destination.lat, lng:destination.lng}}
      icon={{
        url:"/destination.png",
        scaledSize:{
          width :25,
          height:25
        }
      }}
      >
        <OverlayViewF position={{lat:destination.lat, lng:destination.lng}} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
          <div className="p-2 bg-black">
            <p className="text-white text-[12px]">{destination.label}</p>
          </div>
        </OverlayViewF>


      </MarkerF> ): null }


      <DirectionsRenderer
      directions={directionRoutePoint}
      options={{
        polylineOptions:{
          strokeColor:'#000',
          strokeWeight:5
        },
        suppressMarkers:true,
      }}
      />
    </GoogleMap>
    </div>
  ) 
}

export default MapSection